import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome": "Welcome",
      "tips-here":"Here is some quick tips in order to help you" ,
      "GainMuscle":"Gain Muscle",
      "to-loose-Weigth" :"Loose Weight",
      "to-gain-muscle":" Gain Muscle",
      "weight-loss":"Loose Weight",
      "showTime":"It's ShowTime!!!",
      "nothing-can-stop-you":"Nothing Can Stop You",
      "eat-work-sleep-again":"Eat Work Sleep Again and Again",
      "here-we-go":"Here We Go !!!",
      "water-advice":"Water is your friend!!!!You should be addicted to Water",
      "rythmn-advice":"You should find your own rythmn to hit the gym but here is some good advices",
      "food-advices":"The key to achieve whatever your fitGoal is in your food!",
      "motivation-continue":"Don't worry everything gonna happen soon!!!",
      "similar":"Similar",
      "sweat" :"Sweat",
      "smile":"Smile",
      "workout":"Workout",
      "and-repeat":"And Repeat",
      "exercises-below":"Check out the most effective exercises personalized to you right below",
      "search-exercises":"Search Exercises",
      "equipment":"Equipment",
      "target-muscle":"Target Muscle",
      "should-try":"Should try",
      "awesome-exercises-you":"Awesome Exercises You",
      "Home": "Home",
      "exercise-videos":"exercise-videos",
      "similar-exercises":"Similar exercises",
      "watch":"Watch",
      "showing-results":"Showing Results",
      "exercises-keep-you-strong":"Exercises keep you strong.",
      "bup-is-one-of-the-best" :"bup is one of the best",
      "made-by":"Made by Charbel MEHOU",
      "mood-and-gain-energy":"mood and gain energy",
      "it-will-help-you-improve-your":"It will help you improve your",
      "exercises-to-target-your":"exercises to target your",
      "copyright":"© 2023 All rights reserved.",
      "Advices": "Advices",
      "watch-exercise-videos":"Wath some videos related to this exercise"

    }
  },
  fr: {
    translation: {
        "Advices": "Conseils",
        "GainMuscle": "Gain Musculaire",
        "Home": "Accueil",
        "Welcome": "Bienvenue",
        "and-repeat": "Et Répétez",
        "awesome-exercises-you": " Des exercices géniaux pour vous",
        "bup-is-one-of-the-best": " est l'un des meilleurs exercices ",
        "copyright": "© 2023 Tous droits réservés.",
        "eat-work-sleep-again": "Manger, Travailler, dormez, encore et encore!!!",
        "equipment": "Équipement",
        "exercise-videos": "Vidéos d'exercices",
        "exercises-below": "Découvrez les exercices les plus efficaces personnalisés pour vous juste en dessous",
        "exercises-keep-you-strong": "Les exercices vous rendent forts.",
        "exercises-to-target-your": "pour cibler vos",
        "food-advices": "La clé pour atteindre n'importe quel objectif de forme est dans votre alimentation !",
        "here-we-go": "C'est parti !!!",
        "it-will-help-you-improve-your": "Cela vous aidera à améliorer votre Humeur et gain d'énergie",
        "made-by": "Réalisé par Charbel MEHOU",
        "mood-and-gain-energy": "votre Humeur et gain d'énergie",
        "motivation-continue": "Ne vous inquiétez pas, tout arrivera bientôt !!!",
        "nothing-can-stop-you": "Rien ne peut vous arrêter",
        "rythmn-advice": "Vous devriez trouver votre propre rythme pour aller à la salle de sport, mais voici quelques bons conseils",
        "search-exercises": "Rechercher des exercices",
        "similar-exercises":" Exercices Similaires",
        "should-try": "Essayez-les",
        "showTime": "C'est le moment !!!",
        "showing-results": "Affichage des résultats",
        "similar": "Similaire",
        "smile": "Souriez",
        "sweat": "Transpirez",
        "target-muscle": "Muscle cible",
        "tips-here": "Voici quelques astuces rapides pour vous aider",
        "to-loose-Weigth": " à Perdre du poids",
        "to-gain-muscle":"à Gagner du Muscle",
        "water-advice": "L'eau est votre amie ! Vous devriez être accro à l'eau",
        "watch": "Regarder",
        "weight-loss": "Perte de poids",
        "workout": "Entraînez vous",
        "watch-exercise-videos":"Regarder des videos de cet exercice"
      }
      
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
