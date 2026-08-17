// ============================================================
//  CONFIGURACION DE FIREBASE - Tienditas Kiara
// ============================================================
// Reemplaza los valores de abajo con los datos de TU proyecto.
// Los encuentras en: Firebase Console > (icono engranaje) Configuracion
// del proyecto > baja hasta "Tus apps" > selecciona la app web > "SDK
// setup and configuration" > opcion "Config".
//
// Este archivo NO tiene datos secretos: la apiKey de Firebase es
// publica por diseño (la seguridad real la dan las "Reglas" de
// Firestore, ver instrucciones aparte).
// ============================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCaQqJcSspEg9f2ScglkiJ2r0cS3c8wByg",
  authDomain: "tienditaskiara.firebaseapp.com",
  projectId: "tienditaskiara",
  storageBucket: "tienditaskiara.firebasestorage.app",
  messagingSenderId: "1003608297560",
  appId: "1:1003608297560:web:7c84a73112a90ed3823a2d"
};

// Donde se guarda el respaldo dentro de Firestore.
// Puedes dejarlo tal cual, no hace falta tocarlo.
window.FIREBASE_DOC_PATH = { collection: "tienditas_kiara", doc: "datos" };
