import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: {
        login: {
            title: "Log in",
            subtitle: "Fill the form to access your account:",
            usercode: "User code",
            password: "Password",
            loginButton: "Sign in",
            createAccount: "Create new account",
            unauthorized: "Unauthorized: incorrect user or password",
            guestContinue: "View Forms"
        },
        register: {
            title: "Create Account",
            usercode: "User code",
            email: "Email",
            phone: "Phone",
            region: "Region",
            city: "City",
            password: "Password",
            confirmPassword: "Confirm Password",
            submit: "Register",
            haveAccount: "Already have an account? Log in",
            submitSuccess: "✅ Registration Successful",
            submitError: "❌ There was an error during registration",
            rules: {
                usercode: {
                    required:"Required name",
                    invalid: "Invalid name",
                },
                email: {
                    required: "Email is required",
                    invalid: "Invalid email"
                },
                phone: {
                    required: "Phone is required",
                    invalid: "Invalid phone number"
                },
                password: {
                    required: "Password is required",
                    min: "Minimum 6 characters"
                },
                passwordMatch: "Passwords do not match"
            }
        },
        templates: {
            title: "What would you like to do?",
            delivery: {
                title: "Request Delivery",
                description: "Place an order for delivery to your location.",
                button: "Order now"
            },
            medicalAppointment: {
                title: "Schedule Appointment",
                description: "Book an appointment with a healthcare provider.",
                button: "Schedule now"
            },
            providers: {
              title: "Register Provider",
              description: "Quickly and easily add new providers to the system.",
              button: "Register"
            },
            backHome : "Back to home"
        }
    },
    es: {
        login: {
            title: "Iniciar sesión",
            subtitle: "Complete el formulario para iniciar sesión:",
            usercode: "Código de usuario",
            password: "Contraseña",
            loginButton: "Iniciar sesión",
            createAccount: "Crear cuenta nueva",
            unauthorized: "No autorizado: usuario o contraseña incorrectos",
            guestContinue: "Visualizar formularios"
        },
        register: {
            title: "Crear Cuenta",
            usercode: "Código de usuario",
            email: "Correo electrónico",
            phone: "Teléfono",
            region: "Región",
            city: "Ciudad",
            password: "Contraseña",
            confirmPassword: "Confirmar Contraseña",
            submit: "Registrarse",
            haveAccount: "¿Ya tienes cuenta? Inicia sesión",
            submitSuccess: "✅ Registro exitoso",
            submitError: "❌ Hubo un error al registrarse",
            rules: {
                usercode: {
                    required:"Nombre requerido",
                    invalid: "Nombre inválido"
                },
                email: {
                    required: "El correo es requerido",
                    invalid: "Correo inválido"
                },
                phone: {
                    required: "Teléfono requerido",
                    invalid: "Número inválido"
                },
                password: {
                    required: "La contraseña es requerida",
                    min: "Mínimo 6 caracteres"
                },
                passwordMatch: "Las contraseñas no coinciden"
            }
        },
        templates: {
            title: "¿Qué deseas hacer?",
            delivery: {
                title: "Pedir Delivery",
                description: "Realiza un pedido para que lo entreguen a tu ubicación.",
                button: "Pedir ahora"
            },
            medicalAppointment: {
                title: "Agendar Cita",
                description: "Reserva una cita con un proveedor de salud.",
                button: "Agendar ahora"
            },
            providers: {
              title: "Registrar Proveedor",
              description: "Agrega nuevos proveedores al sistema de manera rápida y sencilla.",
              button: "Registrar"
            },
            backHome : "Volver al inicio"
        }
    },
    ca: {
        login: {
            title: "Iniciar sessió",
            subtitle: "Completa el formulari per iniciar sessió:",
            usercode: "Codi d'usuari",
            password: "Contrasenya",
            loginButton: "Iniciar sessió",
            createAccount: "Crear un compte nou",
            unauthorized: "No autoritzat: usuari o contrasenya incorrectes",
            guestContinue: "Visualitzar formularis"
        },
        register: {
            title: "Crear Compte",
            usercode: "Codi d'usuari",
            email: "Correu electrònic",
            phone: "Telèfon",
            region: "Regió",
            city: "Ciutat",
            password: "Contrasenya",
            confirmPassword: "Confirmar Contrasenya",
            submit: "Registrar-se",
            haveAccount: "Ja tens compte? Inicia sessió",
            submitSuccess: "✅ Registre realitzat amb èxit",
            submitError: "❌ Hi ha hagut un error en registrar-se",
            rules: {
                usercode: {
                    required:"Nom requerit",
                    invalid: "Nom invàlid",
                },
                email: {
                    required: "El correu és requerit",
                    invalid: "Correu invàlid"
                },
                phone: {
                    required: "Telèfon requerit",
                    invalid: "Número invàlid"
                },
                password: {
                    required: "La contrasenya és requerida",
                    min: "Mínim 6 caràcters"
                },
                passwordMatch: "Les contrasenyes no coincideixen"
            }
        },
        templates: {
            title: "Què vols fer?",
            delivery: {
                title: "Demanar Repartiment",
                description: "Fes una comanda perquè et portin el producte a la ubicació.",
                button: "Demanar ara"
            },
            medicalAppointment: {
                title: "Agendar Cita",
                description: "Reserva una cita amb un professional de la salut.",
                button: "Agendar ara"
            },
            providers: {
              title: "Registrar Proveïdor",
              description: "Afegeix nous proveïdors al sistema de manera ràpida i senzilla.",
              button: "Registrar"
            },
            backHome : "Tornar a l'inici"
        }
    },
    fr: {
        login: {
            title: "Connexion",
            subtitle: "Remplissez le formulaire pour vous connecter :",
            usercode: "Nom d'utilisateur",
            password: "Mot de passe",
            loginButton: "Se connecter",
            createAccount: "Créer un nouveau compte",
            unauthorized: "Non autorisé : nom d'utilisateur ou mot de passe incorrect",
            guestContinue: "Visualiser les formulaires"
        },
        register: {
            title: "Créer un Compte",
            usercode: "Nom d'utilisateur",
            email: "Email",
            phone: "Téléphone",
            region: "Région",
            city: "Ville",
            password: "Mot de passe",
            confirmPassword: "Confirmer le Mot de Passe",
            submit: "S'inscrire",
            haveAccount: "Vous avez déjà un compte ? Connectez-vous",
            submitSuccess: "✅ Inscription réussie",
            submitError: "❌ Une erreur s'est produite lors de l'inscription",
            rules: {
                usercode: {
                    required:"Nom requis",
                    invalid: "Nom invalide"
                },
                email: {
                    required: "L'email est requis",
                    invalid: "Email invalide"
                },
                phone: {
                    required: "Le téléphone est requis",
                    invalid: "Numéro invalide"
                },
                password: {
                    required: "Le mot de passe est requis",
                    min: "Minimum 6 caractères"
                },
                passwordMatch: "Les mots de passe ne correspondent pas"
            }
        },
        templates: {
            title: "Que souhaitez-vous faire ?",
            delivery: {
                title: "Commander une Livraison",
                description: "Effectuez une commande pour une livraison à votre adresse.",
                button: "Commander maintenant"
            },
            medicalAppointment: {
                title: "Prendre un Rendez-vous",
                description: "Prenez un rendez-vous avec un professionnel de la santé.",
                button: "Planifier maintenant"
            },
            providers: {
              title: "Enregistrer un fournisseur",
              description: "Ajoutez facilement de nouveaux fournisseurs au système.",
              button: "Enregistrer"
            },
            backHome : "Retour à l'accueil"
        }
    }
}

const i18n = new VueI18n({
    locale: 'es', // predeterminado
    fallbackLocale: 'ca', // idioma de reserva
    messages,
});

export default i18n;
