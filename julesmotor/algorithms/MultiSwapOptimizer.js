/**
 * ═══════════════════════════════════════════════════════════════════════
 *                  CLAUDEMOTOR - MULTISWAP OPTIMIZER
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Algorithme de résolution de cycles complexes (3-4 élèves)
 * Utilisé quand les swaps simples ne suffisent plus
 *
 * Version: 2.0.0
 * ═══════════════════════════════════════════════════════════════════════
 */

'use strict';

const MultiSwapOptimizer = (function(global) {

  const Validators = global.ClaudeMotorValidators;
  const Calculators = global.ClaudeMotorCalculators;
  const CRITERES = ['COM', 'TRA', 'PART', 'ABS'];
  const SCORES = [1, 2, 3, 4];

  // ═══════════════════════════════════════════════════════════════════════
  // DÉTECTION DE CYCLES À 3 ÉLÈVES
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Trouve les cycles à 3 élèves pour un critère donné
   * Cycle: A(classe1) → B(classe2) → C(classe3) → A(classe1)
   */
  function find3Cycles(dataContext, critere) {
    const Logger = global.Logger || console;
    const classes = Object.keys(dataContext.classesState);
    const cycles = [];

    // Essayer toutes les combinaisons de 3 classes
    for (let i = 0; i < classes.length - 2; i++) {
      for (let j = i + 1; j < classes.length - 1; j++) {
        for (let k = j + 1; k < classes.length; k++) {
          const class1 = classes[i];
          const class2 = classes[j];
          const class3 = classes[k];

          // Chercher un cycle: class1 → class2 → class3 → class1
          const cycle = tryBuild3Cycle(dataContext, [class1, class2, class3], critere);
          if (cycle) {
            cycles.push(cycle);
          }
        }
      }
    }

    return cycles;
  }

  /**
   * Essaie de construire un cycle à 3 élèves
   */
  function tryBuild3Cycle(dataContext, classes, critere) {
    const [class1, class2, class3] = classes;

    // Récupérer les élèves mobiles de chaque classe
    const students1 = dataContext.classesState[class1].filter(e => Validators.isMobile(e, dataContext));
    const students2 = dataContext.classesState[class2].filter(e => Validators.isMobile(e, dataContext));
    const students3 = dataContext.classesState[class3].filter(e => Validators.isMobile(e, dataContext));

    // Essayer de trouver un cycle valide
    for (const s1 of students1) {
      for (const s2 of students2) {
        for (const s3 of students3) {
          // Vérifier que le cycle est valide
          // s1 (class1) → class2
          // s2 (class2) → class3
          // s3 (class3) → class1

          const valid12 = Validators.validateSwap(s1, s2, class1, class2, dataContext).valid;
          const valid23 = Validators.validateSwap(s2, s3, class2, class3, dataContext).valid;
          const valid31 = Validators.validateSwap(s3, s1, class3, class1, dataContext).valid;

          if (valid12 && valid23 && valid31) {
            // Calculer l'impact du cycle
            const impact = calculate3CycleImpact(s1, s2, s3, class1, class2, class3, critere);

            if (impact > 0) {
              return {
                type: '3-CYCLE',
                students: [s1, s2, s3],
                classes: [class1, class2, class3],
                critere,
                impact,
                // s1 → class2, s2 → class3, s3 → class1
                moves: [
                  { student: s1, from: class1, to: class2 },
                  { student: s2, from: class2, to: class3 },
                  { student: s3, from: class3, to: class1 }
                ]
              };
            }
          }
        }
      }
    }

    return null;
  }

  /**
   * Calcule l'impact d'un cycle à 3 élèves
   */
  function calculate3CycleImpact(s1, s2, s3, c1, c2, c3, critere) {
    let impact = 0;

    // Vérifier si le cycle améliore l'équilibre pour le critère donné
    const score1 = parseInt(s1[critere]) || 0;
    const score2 = parseInt(s2[critere]) || 0;
    const score3 = parseInt(s3[critere]) || 0;

    // Si les scores sont tous différents, le cycle peut être bénéfique
    if (score1 !== score2 && score2 !== score3 && score1 !== score3) {
      impact = 1.0;

      // Bonus si mobilité LIBRE
      if (s1.MOBILITE === 'LIBRE' && s2.MOBILITE === 'LIBRE' && s3.MOBILITE === 'LIBRE') {
        impact *= 1.5;
      }
    }

    return impact;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // DÉTECTION DE CYCLES À 4 ÉLÈVES (PARITÉ)
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Trouve les cycles à 4 élèves pour correction de parité
   * Utile quand 2 classes ont chacune +2F/-2M ou vice-versa
   */
  function find4CyclesForParity(dataContext) {
    const Logger = global.Logger || console;
    const classes = Object.keys(dataContext.classesState);
    const cycles = [];

    // Identifier les classes avec déséquilibre de parité
    const genderDist = Calculators.calculateGenderDistribution(dataContext);
    const imbalances = Calculators.findParityImbalances(genderDist, 1);

    // Chercher des cycles entre classes complémentaires
    for (const surplus of imbalances.surplus) {
      for (const deficit of imbalances.deficit) {
        // Si déséquilibre >= 2, essayer un cycle à 4
        if (Math.abs(surplus.surplusM) >= 2 && Math.abs(deficit.deficitM) >= 2) {
          const cycle = tryBuild4ParityCycle(
            dataContext,
            surplus.classe,
            deficit.classe,
            'M',
            'F'
          );

          if (cycle) {
            cycles.push(cycle);
          }
        }
      }
    }

    return cycles;
  }

  /**
   * Essaie de construire un cycle à 4 élèves pour la parité
   */
  function tryBuild4ParityCycle(dataContext, surplusClass, deficitClass, surplusGender, deficitGender) {
    // Élèves du sexe en surplus dans surplusClass
    const surplusStudents = dataContext.classesState[surplusClass].filter(e =>
      e.SEXE === surplusGender && Validators.isMobile(e, dataContext)
    );

    // Élèves du sexe en surplus dans deficitClass
    const deficitStudents = dataContext.classesState[deficitClass].filter(e =>
      e.SEXE === deficitGender && Validators.isMobile(e, dataContext)
    );

    // Chercher 2 paires valides
    if (surplusStudents.length >= 2 && deficitStudents.length >= 2) {
      for (let i = 0; i < surplusStudents.length - 1; i++) {
        for (let j = i + 1; j < surplusStudents.length; j++) {
          for (let k = 0; k < deficitStudents.length - 1; k++) {
            for (let l = k + 1; l < deficitStudents.length; l++) {
              const s1 = surplusStudents[i];
              const s2 = surplusStudents[j];
              const d1 = deficitStudents[k];
              const d2 = deficitStudents[l];

              // Vérifier que les 2 échanges sont valides
              const valid1 = Validators.validateSwap(s1, d1, surplusClass, deficitClass, dataContext).valid;
              const valid2 = Validators.validateSwap(s2, d2, surplusClass, deficitClass, dataContext).valid;

              if (valid1 && valid2) {
                return {
                  type: '4-PARITY-CYCLE',
                  students: [s1, s2, d1, d2],
                  classes: [surplusClass, deficitClass],
                  surplusGender,
                  deficitGender,
                  impact: 2.0, // Corrige 2 déséquilibres en même temps
                  moves: [
                    { student: s1, from: surplusClass, to: deficitClass },
                    { student: s2, from: surplusClass, to: deficitClass },
                    { student: d1, from: deficitClass, to: surplusClass },
                    { student: d2, from: deficitClass, to: surplusClass }
                  ]
                };
              }
            }
          }
        }
      }
    }

    return null;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // APPLICATION DES CYCLES
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Applique un cycle (3 ou 4 élèves)
   */
  function applyCycle(cycle, dataContext) {
    const Logger = global.Logger || console;

    try {
      // Sauvegarder les états initiaux
      const backups = {};
      cycle.classes.forEach(classe => {
        backups[classe] = [...dataContext.classesState[classe]];
      });

      // Appliquer tous les mouvements du cycle
      for (const move of cycle.moves) {
        const { student, from, to } = move;

        // Retirer l'élève de la classe source
        const fromIndex = dataContext.classesState[from].findIndex(
          e => e.ID_ELEVE === student.ID_ELEVE
        );

        if (fromIndex === -1) {
          // Rollback en cas d'erreur
          Object.assign(dataContext.classesState, backups);
          return false;
        }

        const removedStudent = dataContext.classesState[from].splice(fromIndex, 1)[0];

        // Ajouter l'élève à la classe cible
        dataContext.classesState[to].push(removedStudent);
      }

      Logger.log(`✅ Cycle ${cycle.type} appliqué avec succès`);
      return true;

    } catch (error) {
      Logger.log(`❌ Erreur application cycle: ${error.message}`);
      return false;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // ALGORITHME PRINCIPAL
  // ═══════════════════════════════════════════════════════════════════════

  /**
   * Optimise avec des cycles complexes
   */
  function optimize(dataContext, options = {}) {
    const maxCycles = options.maxCycles || 10;
    const includeParity = options.includeParity !== false;

    const Logger = global.Logger || console;

    Logger.log('🔄 Démarrage MultiSwap Optimizer...');

    const allCycles = [];

    // Phase 1: Cycles à 3 élèves pour les scores
    Logger.log('\n   Recherche de cycles à 3 élèves (scores)...');
    for (const critere of CRITERES) {
      const cycles3 = find3Cycles(dataContext, critere);

      if (cycles3.length > 0) {
        Logger.log(`   Trouvé ${cycles3.length} cycles pour ${critere}`);

        // Trier par impact et appliquer les meilleurs
        cycles3.sort((a, b) => b.impact - a.impact);

        for (const cycle of cycles3) {
          if (allCycles.length >= maxCycles) break;

          if (applyCycle(cycle, dataContext)) {
            allCycles.push(cycle);
            Logger.log(
              `   ✅ Cycle 3: ${cycle.students.map(s => s.ID_ELEVE).join(' → ')} ` +
              `(${cycle.classes.join(' → ')}) [${cycle.critere}]`
            );
          }
        }
      }
    }

    // Phase 2: Cycles à 4 élèves pour la parité (si activé)
    if (includeParity) {
      Logger.log('\n   Recherche de cycles à 4 élèves (parité)...');
      const cycles4 = find4CyclesForParity(dataContext);

      if (cycles4.length > 0) {
        Logger.log(`   Trouvé ${cycles4.length} cycles parité`);

        cycles4.sort((a, b) => b.impact - a.impact);

        for (const cycle of cycles4) {
          if (allCycles.length >= maxCycles) break;

          if (applyCycle(cycle, dataContext)) {
            allCycles.push(cycle);
            Logger.log(
              `   ✅ Cycle 4 parité: ${cycle.students.length} élèves ` +
              `(${cycle.classes.join(' ↔ ')})`
            );
          }
        }
      }
    }

    Logger.log(`\n🔄 MultiSwap terminé: ${allCycles.length} cycles appliqués`);

    return {
      success: true,
      cycles: allCycles,
      totalCycles: allCycles.length
    };
  }

  // ═══════════════════════════════════════════════════════════════════════
  // API PUBLIQUE
  // ═══════════════════════════════════════════════════════════════════════

  const API = {
    optimize,
    find3Cycles,
    find4CyclesForParity,
    applyCycle
  };

  global.MultiSwapOptimizer = API;
  return API;

})(typeof globalThis !== 'undefined' ? globalThis : this);
