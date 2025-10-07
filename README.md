# 🎓 Répartition Classes - Système de Gestion Scolaire

[![Version](https://img.shields.io/badge/version-13.0-blue.svg)](https://github.com)
[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-Ready-green.svg)](https://script.google.com)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production%20Ready-success.svg)]()

> Système complet de répartition automatique d'élèves en classes avec optimisation multi-critères, interface moderne et algorithmes avancés.

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Architecture](#-architecture)
- [Documentation](#-documentation)
- [Contribution](#-contribution)
- [Sécurité](#-sécurité)
- [License](#-license)

---

## 🎯 Aperçu

**Répartition Classes** est une solution complète pour automatiser la répartition des élèves en classes selon de multiples critères :

- ✅ **Parité F/M** (équilibre garçons/filles)
- ✅ **Équilibrage des scores** (comportement, travail, participation)
- ✅ **Contraintes** (associations, dissociations, mobilité)
- ✅ **Options** (LV2, options facultatives)
- ✅ **Optimisation** (algorithmes avancés ClaudeMotor)

### 🎬 Demo

![Interface V2](docs/screenshots/interface_v2.png)
*Interface moderne avec drag & drop, modes de vue, et menu simplifié*

---

## ✨ Fonctionnalités

### 🎨 Interface V2 (Nouvelle version)

- **3 modes de vue** :
  - 📊 **Complet** : Tous les détails (badges, scores, source)
  - ⭐ **Essentiel** : Badges essentiels uniquement (mobilité, disso, asso, LV2)
  - 📝 **Simple** : Nom uniquement avec couleurs F/M

- **Menu unifié ⚙️ Paramètres** :
  - Affichage (lisibilité, mode sombre, zoom)
  - Actions (undo/redo, swap, historique, optimisation)
  - Données (import, export, sauvegarde)
  - Filtres (PERMUT, FIXE, LV2, contraintes)
  - Aide (raccourcis, tutoriel)

- **Accessibilité ARIA** :
  - Support lecteurs d'écran
  - Navigation au clavier
  - États dynamiques (expanded, pressed, grabbed)

- **Fonctionnalités avancées** :
  - Drag & drop fluide (SortableJS)
  - Statistiques en temps réel
  - Historique avec undo/redo
  - Mode swap pour échanges
  - Recherche et filtres rapides
  - Export Excel/PDF/Pronote

### 🤖 ClaudeMotor (Nouveau moteur d'optimisation)

Remplace Nirvana avec une architecture modulaire :

```
ClaudeMotor/
├── Core.gs           # Moteur principal
├── Utils/
│   ├── Calculators   # Calculs métriques
│   └── Validators    # Validations contraintes
├── Algorithms/
│   ├── ParityCorrector   # Équilibrage parité
│   └── ScoresBalancer    # Équilibrage scores
└── UI/
    └── Orchestrator      # Interface utilisateur
```

### 📊 Algorithmes d'optimisation

- **Phase 1a** : Optimisation options (LV2, options facultatives)
- **Phase 1b** : Gestion codes (associations, dissociations)
- **Phase 1c** : Équilibrage parité F/M
- **Phase 4** : Optimisation finale multi-critères
- **Phase 5** : Finalisation et export

### 💾 Backend robuste

- Configuration centralisée (Config.js)
- Gestion complète des élèves (BackendV2.js)
- Système de groupes flexible
- Validation des contraintes
- Gestion des erreurs standardisée

---

## 🛠️ Technologies

- **Google Apps Script** : Backend et logique métier
- **HTML/CSS/JavaScript** : Interface utilisateur
- **Tailwind CSS** : Framework CSS moderne
- **SortableJS** : Drag & drop
- **Chart.js** : Graphiques et statistiques
- **SheetJS** : Export Excel
- **jsPDF** : Export PDF
- **Font Awesome** : Icônes

---

## 🚀 Installation

### Prérequis

- Compte Google avec accès à Google Sheets
- Google Apps Script activé
- Navigateur moderne (Chrome, Firefox, Edge)

### Étape 1 : Cloner le repository

```bash
git clone https://github.com/votre-username/repartition-classes.git
cd repartition-classes
```

### Étape 2 : Préparer les fichiers

#### Windows
```bash
# Nettoyer et préparer automatiquement
prepare_for_google_apps_script.bat
```

#### Linux/Mac
```bash
# À adapter selon votre environnement
./prepare_for_google_apps_script.sh
```

### Étape 3 : Uploader dans Google Apps Script

1. Ouvrir [Google Apps Script](https://script.google.com)
2. Créer un nouveau projet
3. Supprimer les fichiers Nirvana obsolètes (si migration)
4. Uploader les fichiers dans l'ordre (voir [GUIDE_INSERTION](docs/GUIDE_INSERTION_GOOGLE_APPS_SCRIPT.md))
5. Autoriser les permissions nécessaires

### Étape 4 : Configuration

1. Créer une feuille Google Sheets
2. Importer la structure (Menu → Répartition Classes → Structure)
3. Configurer les paramètres (Config.js)
4. Tester avec des données fictives

**📖 Documentation complète** : [GUIDE_INSTALLATION.md](docs/GUIDE_INSTALLATION.md)

---

## 🏗️ Architecture

### Structure du projet

```
repartition-classes/
│
├── 📦 CORE
│   ├── Config.js                   # Configuration globale
│   ├── BackendV2.js                # Backend principal
│   ├── Menu.js                     # Menu Google Sheets
│   ├── InterfaceV2.html            # Interface utilisateur
│   ├── Utils.js                    # Utilitaires
│   └── Initialisation.js           # Initialisation système
│
├── 🤖 CLAUDEMOTOR
│   ├── ClaudeMotor_Core.gs
│   ├── ClaudeMotor_Utils_Calculators.gs
│   ├── ClaudeMotor_Utils_Validators.gs
│   ├── ClaudeMotor_Algorithm_ParityCorrector.gs
│   ├── ClaudeMotor_Algorithm_ScoresBalancer.gs
│   └── ClaudeMotor_UI_Orchestrator.gs
│
├── 🧮 ALGORITHMS
│   ├── Phase1a_OPT.js
│   ├── Phase1b_CODES.js
│   ├── Phase1c_PARITE.js
│   ├── Phase4_Optimisation.gs.js
│   ├── Phase5.V12.js
│   └── Pipeline_Variante_Scores.js
│
├── 🎨 UI
│   ├── groupsUI.html
│   ├── Console.html
│   ├── StatistiquesDashboard.html
│   └── [autres interfaces...]
│
├── 📚 DOCS
│   ├── ARCHITECTURE_MODULAIRE.md
│   ├── GUIDE_INSERTION_GOOGLE_APPS_SCRIPT.md
│   ├── AUDIT_FINAL.md
│   └── [autres docs...]
│
└── 🧪 TESTS
    ├── Tests.js
    ├── test_Utils.js
    └── [autres tests...]
```

### Architecture logicielle

```
┌─────────────────────────────────────────────────────┐
│                  INTERFACE V2                       │
│  (HTML/CSS/JS - Drag & Drop - Modes de vue)        │
└─────────────────────────────────────────────────────┘
                        │
                        ↓
┌─────────────────────────────────────────────────────┐
│                   MENU.JS                           │
│           (Orchestrateur principal)                 │
└─────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ BACKENDV2.JS │ │  CONFIG.JS   │ │   UTILS.JS   │
│   (CRUD)     │ │(Configuration)│ │ (Utilitaires)│
└──────────────┘ └──────────────┘ └──────────────┘
        │               │               │
        └───────────────┼───────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│              CLAUDEMOTOR ENGINE                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ PARITY   │  │  SCORES  │  │   OPTS   │         │
│  │CORRECTOR │  │ BALANCER │  │ RESOLVER │         │
│  └──────────┘  └──────────┘  └──────────┘         │
└─────────────────────────────────────────────────────┘
                        │
                        ↓
┌─────────────────────────────────────────────────────┐
│              GOOGLE SHEETS API                      │
│         (Lecture/Écriture données)                  │
└─────────────────────────────────────────────────────┘
```

**📖 Documentation architecture** : [ARCHITECTURE_MODULAIRE.md](docs/ARCHITECTURE_MODULAIRE.md)

---

## 📚 Documentation

### Guides principaux

| Document | Description |
|----------|-------------|
| [README_DEMARRAGE_RAPIDE.md](README_DEMARRAGE_RAPIDE.md) | 🚀 Guide de démarrage rapide |
| [AUDIT_FINAL.md](AUDIT_FINAL.md) | 🔍 Audit complet du projet |
| [GUIDE_INSERTION_GOOGLE_APPS_SCRIPT.md](docs/GUIDE_INSERTION_GOOGLE_APPS_SCRIPT.md) | 📖 Guide d'installation |
| [ARCHITECTURE_MODULAIRE.md](docs/ARCHITECTURE_MODULAIRE.md) | 🏗️ Architecture logicielle |

### Guides techniques

- [MODULARISATION_RESUME.md](docs/MODULARISATION_RESUME.md) - Résumé de la modularisation
- [GUIDE_MIGRATION.md](docs/GUIDE_MIGRATION.md) - Migration vers nouvelle version
- [TEST_ARCHITECTURE.md](docs/TEST_ARCHITECTURE.md) - Tests et validation
- [EXEMPLES_ARCHITECTURE.md](docs/EXEMPLES_ARCHITECTURE.md) - Exemples de code

### Rapports

- [RAPPORT_NETTOYAGE_INTERFACEV2.md](docs/RAPPORT_NETTOYAGE_INTERFACEV2.md) - Rapport nettoyage
- [IMPROVEMENTS.md](IMPROVEMENTS.md) - Améliorations apportées
- [AUDIT_REPORT.md](AUDIT_REPORT.md) - Audit technique

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

### 1. Fork et clone

```bash
git clone https://github.com/votre-username/repartition-classes.git
cd repartition-classes
```

### 2. Créer une branche

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

### 3. Commiter vos changements

```bash
git add .
git commit -m "✨ Ajout de [fonctionnalité]"
```

### 4. Pusher et créer une Pull Request

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

### Conventions de commit

- ✨ `:sparkles:` - Nouvelle fonctionnalité
- 🐛 `:bug:` - Correction de bug
- 📚 `:books:` - Documentation
- ♻️ `:recycle:` - Refactoring
- 🎨 `:art:` - Amélioration UI/UX
- ⚡ `:zap:` - Performance
- 🔒 `:lock:` - Sécurité

---

## 🔒 Sécurité

### ⚠️ Avant d'uploader sur GitHub

**IMPORTANT** : Ce repository ne contient **AUCUNE donnée réelle d'élèves**.

- ✅ Mot de passe par défaut `admin123` (à changer en production)
- ✅ Données de test fictives uniquement
- ✅ `.gitignore` configuré pour exclure les données sensibles

### 🛡️ Pour utiliser en production

1. **Changer le mot de passe admin** dans Config.js
2. **Ne PAS commiter** de données réelles d'élèves
3. **Utiliser des variables d'environnement** pour les secrets
4. **Activer les permissions** Google Apps Script minimales
5. **Limiter l'accès** aux feuilles Google Sheets

### 🔐 Données sensibles à NE JAMAIS commiter

```
❌ Fichiers avec noms/prénoms réels
❌ Exports Excel/CSV avec données réelles
❌ Logs contenant des informations personnelles
❌ Credentials Google
❌ Mots de passe de production
```

**Le `.gitignore` est configuré pour vous protéger.**

---

## 📊 Statistiques

- **Langage principal** : JavaScript (Apps Script)
- **Lignes de code** : ~150 000
- **Fichiers** : 52 fichiers JS/HTML
- **Documentation** : 13 fichiers MD
- **Taille** : ~2,5 MB
- **Tests** : 6 fichiers de test

---

## 🎓 Analyse par IA / Code Review

### Utilisation avec GPT Codex / Jules CLI

Ce projet est **optimisé** pour l'analyse par IA :

```bash
# Jules CLI
jules analyze .

# GPT Codex
codex review --path=.
```

**Points à analyser** :
- ✅ Qualité du code (architecture modulaire)
- ✅ Sécurité (pas de données sensibles)
- ✅ Performance (algorithmes optimisés)
- ✅ Documentation (complète et à jour)
- ✅ Tests (6 fichiers de test)

**Fichiers clés à reviewer** :
1. `InterfaceV2.html` (357 KB) - Interface principale
2. `Config.js` (35 KB) - Configuration
3. `BackendV2.js` (51 KB) - Backend
4. `ClaudeMotor_Core.gs` - Moteur optimisation

---

## 📄 License

Ce projet est sous licence **MIT**. Voir [LICENSE](LICENSE) pour plus de détails.

---

## 👥 Auteurs

- **Développement initial** : [Votre nom]
- **Architecture ClaudeMotor** : [Nom]
- **Interface V2** : [Nom]

---

## 🙏 Remerciements

- Google Apps Script pour la plateforme
- Tailwind CSS pour le framework CSS
- SortableJS pour le drag & drop
- Chart.js pour les graphiques
- La communauté open source

---

## 📧 Contact

- **Issues** : [GitHub Issues](https://github.com/votre-username/repartition-classes/issues)
- **Discussions** : [GitHub Discussions](https://github.com/votre-username/repartition-classes/discussions)
- **Email** : votre-email@example.com

---

## 🌟 Stargazers

Si ce projet vous a été utile, n'oubliez pas de mettre une ⭐ !

[![Stargazers over time](https://starchart.cc/votre-username/repartition-classes.svg)](https://starchart.cc/votre-username/repartition-classes)

---

**Version** : 13.0 (Production Ready)
**Dernière mise à jour** : 6 octobre 2025
**Statut** : ✅ Actif et maintenu
