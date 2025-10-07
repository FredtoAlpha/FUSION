# 🚀 GUIDE D'INSTALLATION - PROJET FUSION

**Version** : FUSION 1.0
**Date** : 7 octobre 2025
**Temps estimé** : 30-45 minutes

---

## 📋 TABLE DES MATIÈRES

1. [Prérequis](#prérequis)
2. [Étape 1 : Préparation](#étape-1--préparation)
3. [Étape 2 : Création du projet GAS](#étape-2--création-du-projet-gas)
4. [Étape 3 : Upload des fichiers moteur](#étape-3--upload-des-fichiers-moteur)
5. [Étape 4 : Upload des fichiers backend](#étape-4--upload-des-fichiers-backend)
6. [Étape 5 : Configuration](#étape-5--configuration)
7. [Étape 6 : Tests](#étape-6--tests)
8. [Dépannage](#dépannage)

---

## ✅ PRÉREQUIS

- [ ] Compte Google avec accès à Google Sheets
- [ ] Google Apps Script activé
- [ ] Navigateur moderne (Chrome, Firefox, Edge)
- [ ] Accès au dossier `C:\CLAUDE CODE\FUSION`

---

## 📝 ÉTAPE 1 : PRÉPARATION

### 1.1 Vérifier les fichiers

Assurez-vous que tous les fichiers sont présents dans `C:\CLAUDE CODE\FUSION\google_apps_script_ready\` :

```
✅ ClaudeMotor_Utils_Validators.gs          (398 lignes)
✅ ClaudeMotor_Utils_Calculators.gs         (447 lignes)
✅ ClaudeMotor_Algorithm_ScoresBalancer.gs  (332 lignes)
✅ ClaudeMotor_Algorithm_ParityCorrector.gs (347 lignes)
✅ ClaudeMotor_Algorithm_MultiSwapOptimizer.gs (360 lignes) ⭐
✅ ClaudeMotor_Core.gs                      (338 lignes)
✅ ClaudeMotor_UI_Orchestrator.gs           (340 lignes)
```

**Total : 7 fichiers | 2562 lignes**

### 1.2 Créer une feuille Google Sheets de test

1. Ouvrir [Google Sheets](https://sheets.google.com)
2. Créer une nouvelle feuille
3. La nommer "Répartition Classes - Test FUSION"
4. Noter l'URL de la feuille

---

## 🔧 ÉTAPE 2 : CRÉATION DU PROJET GAS

### 2.1 Accéder à Google Apps Script

1. Dans votre feuille Google Sheets
2. Menu : **Extensions** → **Apps Script**
3. Un nouvel onglet s'ouvre avec l'éditeur Apps Script

### 2.2 Préparer le projet

1. Supprimer le fichier `Code.gs` par défaut (clic droit → Supprimer)
2. Le projet est maintenant vide et prêt

---

## 📤 ÉTAPE 3 : UPLOAD DES FICHIERS MOTEUR

### ⚠️ IMPORTANT : ORDRE D'UPLOAD

**Respectez cet ordre pour éviter les erreurs de dépendances !**

### 3.1 Utils (Fondations)

#### **Fichier 1/7** : ClaudeMotor_Utils_Validators.gs

1. Cliquer sur **+** → **Script**
2. Nom : `ClaudeMotor_Utils_Validators`
3. Ouvrir `C:\CLAUDE CODE\FUSION\google_apps_script_ready\ClaudeMotor_Utils_Validators.gs`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

#### **Fichier 2/7** : ClaudeMotor_Utils_Calculators.gs

1. Cliquer sur **+** → **Script**
2. Nom : `ClaudeMotor_Utils_Calculators`
3. Ouvrir `C:\CLAUDE CODE\FUSION\google_apps_script_ready\ClaudeMotor_Utils_Calculators.gs`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

✅ **Checkpoint 1** : Vous avez maintenant 2 fichiers

---

### 3.2 Algorithms (Algorithmes)

#### **Fichier 3/7** : ClaudeMotor_Algorithm_ScoresBalancer.gs

1. Cliquer sur **+** → **Script**
2. Nom : `ClaudeMotor_Algorithm_ScoresBalancer`
3. Ouvrir `C:\CLAUDE CODE\FUSION\google_apps_script_ready\ClaudeMotor_Algorithm_ScoresBalancer.gs`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

#### **Fichier 4/7** : ClaudeMotor_Algorithm_ParityCorrector.gs

1. Cliquer sur **+** → **Script**
2. Nom : `ClaudeMotor_Algorithm_ParityCorrector`
3. Ouvrir `C:\CLAUDE CODE\FUSION\google_apps_script_ready\ClaudeMotor_Algorithm_ParityCorrector.gs`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

#### **Fichier 5/7** : ClaudeMotor_Algorithm_MultiSwapOptimizer.gs ⭐

1. Cliquer sur **+** → **Script**
2. Nom : `ClaudeMotor_Algorithm_MultiSwapOptimizer`
3. Ouvrir `C:\CLAUDE CODE\FUSION\google_apps_script_ready\ClaudeMotor_Algorithm_MultiSwapOptimizer.gs`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

✅ **Checkpoint 2** : Vous avez maintenant 5 fichiers

---

### 3.3 Core & UI (Moteur principal)

#### **Fichier 6/7** : ClaudeMotor_Core.gs

1. Cliquer sur **+** → **Script**
2. Nom : `ClaudeMotor_Core`
3. Ouvrir `C:\CLAUDE CODE\FUSION\google_apps_script_ready\ClaudeMotor_Core.gs`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

#### **Fichier 7/7** : ClaudeMotor_UI_Orchestrator.gs

1. Cliquer sur **+** → **Script**
2. Nom : `ClaudeMotor_UI_Orchestrator`
3. Ouvrir `C:\CLAUDE CODE\FUSION\google_apps_script_ready\ClaudeMotor_UI_Orchestrator.gs`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

✅ **Checkpoint 3** : Vous avez maintenant **7 fichiers** - Le moteur est complet !

---

## 📤 ÉTAPE 4 : UPLOAD DES FICHIERS BACKEND

### 4.1 Fichiers essentiels

#### **Fichier 8** : Config.js

1. Cliquer sur **+** → **Script**
2. Nom : `Config`
3. Ouvrir `C:\CLAUDE CODE\FUSION\Config.js`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

#### **Fichier 9** : Menu.js

1. Cliquer sur **+** → **Script**
2. Nom : `Menu`
3. Ouvrir `C:\CLAUDE CODE\FUSION\Menu.js`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

#### **Fichier 10** : BackendV2.js

1. Cliquer sur **+** → **Script**
2. Nom : `BackendV2`
3. Ouvrir `C:\CLAUDE CODE\FUSION\BackendV2.js`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

#### **Fichier 11** : Utils.js

1. Cliquer sur **+** → **Script**
2. Nom : `Utils`
3. Ouvrir `C:\CLAUDE CODE\FUSION\Utils.js`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

### 4.2 Interface HTML

#### **Fichier 12** : InterfaceV2.html

1. Cliquer sur **+** → **HTML**
2. Nom : `InterfaceV2`
3. Ouvrir `C:\CLAUDE CODE\FUSION\InterfaceV2.html`
4. Copier tout le contenu
5. Coller dans l'éditeur GAS
6. Sauvegarder (Ctrl+S)

✅ **Checkpoint 4** : Backend installé (12 fichiers minimum)

---

## ⚙️ ÉTAPE 5 : CONFIGURATION

### 5.1 Configurer le manifest

1. Dans l'éditeur GAS, cliquer sur l'icône **⚙️ Paramètres du projet** (à gauche)
2. Faire défiler jusqu'à **Manifest**
3. Cocher **Afficher "appsscript.json"**
4. Un nouveau fichier `appsscript.json` apparaît
5. Ouvrir `C:\CLAUDE CODE\FUSION\appsscript.json`
6. Copier le contenu :

```json
{
  "timeZone": "Europe/Paris",
  "dependencies": {},
  "webapp": {
    "access": "DOMAIN",
    "executeAs": "USER_ACCESSING"
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

7. Remplacer le contenu du fichier GAS
8. Sauvegarder

### 5.2 Autoriser les permissions

1. Fermer l'éditeur GAS
2. Retourner dans Google Sheets
3. Rafraîchir la page (F5)
4. Un menu **🚀 ClaudeMotor** doit apparaître
5. Si demandé, autoriser les permissions :
   - Lire et modifier vos feuilles de calcul
   - Afficher et exécuter du contenu web tiers
   - Se connecter à un service externe

---

## 🧪 ÉTAPE 6 : TESTS

### 6.1 Test du menu

1. Dans Google Sheets, cliquer sur **🚀 ClaudeMotor**
2. Vérifier que le menu affiche :
   - 🎯 Optimisation Complète
   - 📈 Équilibrage Scores
   - ⚖️ Correction Parité
   - 📊 Diagnostic
   - ℹ️ À propos

### 6.2 Test "À propos"

1. Cliquer sur **🚀 ClaudeMotor** → **ℹ️ À propos**
2. Une fenêtre doit s'afficher avec :
   ```
   🚀 CLAUDEMOTOR ENGINE
   Version: 2.0.0
   Algorithmes: ScoresBalancer, ParityCorrector, MultiSwapOptimizer
   ```
3. Vérifier que **MultiSwapOptimizer** apparaît ⭐

### 6.3 Test du Diagnostic

1. Créer des données de test minimales :
   - Feuille "6A" avec colonnes : ID_ELEVE, NOM_PRENOM, SEXE, COM, TRA, PART, ABS
   - Ajouter 5-10 élèves fictifs
2. Cliquer sur **🚀 ClaudeMotor** → **📊 Diagnostic**
3. Un rapport doit s'afficher

### 6.4 Test de l'optimisation (optionnel)

⚠️ Nécessite des données complètes

1. Importer vos données d'élèves
2. Cliquer sur **🚀 ClaudeMotor** → **🎯 Optimisation Complète**
3. Observer les logs dans **Extensions** → **Apps Script** → **Exécutions**

---

## 🐛 DÉPANNAGE

### Problème : Menu ClaudeMotor n'apparaît pas

**Solutions** :
1. Rafraîchir la page (F5)
2. Fermer et rouvrir la feuille
3. Vérifier que `Menu.js` est bien uploadé
4. Vérifier la fonction `onOpen()` dans ClaudeMotor_UI_Orchestrator.gs

### Problème : Erreur "ClaudeMotorValidators is not defined"

**Cause** : Fichiers uploadés dans le mauvais ordre

**Solution** :
1. Vérifier que `ClaudeMotor_Utils_Validators.gs` est bien présent
2. Sauvegarder tous les fichiers (Ctrl+S sur chaque fichier)
3. Fermer et rouvrir l'éditeur GAS

### Problème : Erreur "MultiSwapOptimizer is not defined"

**Cause** : Le fichier MultiSwapOptimizer n'est pas uploadé

**Solution** :
1. Vérifier que `ClaudeMotor_Algorithm_MultiSwapOptimizer.gs` existe
2. Vérifier qu'il contient bien 360 lignes
3. Sauvegarder et réessayer

### Problème : Erreur de permissions

**Solution** :
1. Menu **🚀 ClaudeMotor** → **ℹ️ À propos**
2. Autoriser toutes les permissions demandées
3. Réessayer l'opération

### Problème : Phase 3 ne s'exécute pas

**Vérifications** :
1. Ouvrir **Extensions** → **Apps Script** → **Exécutions**
2. Chercher les logs "Phase 3"
3. Vérifier le message :
   - ✅ "PHASE 3: Optimisation MultiSwap" = OK
   - ❌ "Module MultiSwapOptimizer non disponible" = Fichier manquant

---

## ✅ CHECKLIST FINALE

Avant de passer en production, vérifiez :

- [ ] 7 fichiers moteur uploadés
- [ ] appsscript.json configuré avec `access: "DOMAIN"`
- [ ] Menu ClaudeMotor visible
- [ ] "À propos" mentionne MultiSwapOptimizer
- [ ] Diagnostic fonctionne
- [ ] Logs détaillés visibles dans les exécutions
- [ ] Permissions autorisées
- [ ] Tests avec données fictives OK

---

## 🎉 FÉLICITATIONS !

Votre projet **FUSION** est maintenant installé et opérationnel !

**Prochaines étapes** :
1. Importer vos données réelles
2. Tester l'optimisation complète
3. Analyser les résultats
4. Consulter les logs pour comprendre le processus

**Support** :
- Consulter `README_FUSION.md` pour plus de détails
- Vérifier `AUDIT_FINAL.md` pour la documentation technique
- Examiner les logs dans **Extensions** → **Apps Script** → **Exécutions**

---

**Créé par** : Claude Code
**Version** : FUSION 1.0
**Date** : 7 octobre 2025
