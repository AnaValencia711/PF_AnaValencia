
const usuarios = [
    {
        nombreUsuario: "usuario1",
        contrasena: "contrasena1",
        correoElectronico: "usuario1@example.com"
    },
    {
        nombreUsuario: "usuario2",
        contrasena: "contrasena2",
        correoElectronico: "usuario2@example.com"
    }
];
const registroForm = document.getElementById("registro-form");
const loginForm = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");

registroForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const nuevoUsuario = {
      nombreUsuario: document.getElementById("nombre-usuario").value,
      contrasena: document.getElementById("contrasena").value,
      correoElectronico: document.getElementById("correo-electronico").value
  };
  usuarios.push(nuevoUsuario);
  mensaje.textContent = "Usuario registrado con éxito.";
});

loginForm.addEventListener("submit", function (e) {
e.preventDefault();
const nombreUsuario = document.getElementById("login-nombre-usuario").value;
const contrasena = document.getElementById("login-contrasena").value;
const usuarioEncontrado = usuarios.find(user => user.nombreUsuario === nombreUsuario && user.contrasena === contrasena);

if (usuarioEncontrado) {
    mensaje.textContent = `Inicio de sesión exitoso para ${usuarioEncontrado.nombreUsuario}`;
} else {
    mensaje.textContent = "Nombre de usuario o contraseña incorrectos.";
}
});
