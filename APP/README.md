Documentación básica del proyecto
Alumno Fabián Farías Cubillos
Programación Front end
15 de junio 2026

Funcionamiento de la aplicación

La aplicación fue desarrollada utilizando React y tiene como finalidad administrar una lista de tareas de manera simple e interactiva. Su funcionamiento comienza en el archivo principal App.jsx, donde se gestionan los estados necesarios para almacenar las tareas y controlar el cambio entre modo claro y modo oscuro.

El usuario puede escribir una tarea en el cuadro de texto y, al presionar el botón Agregar, esta se incorpora automáticamente a la lista mostrada en pantalla. Asimismo, cada tarea posee un botón que permite eliminarla cuando ya no sea necesaria. De igual forma, la aplicación cuenta con un botón para cambiar el tema visual, permitiendo alternar entre modo claro y modo oscuro.

Gracias al uso de React, la información se actualiza automáticamente sin necesidad de recargar la página, proporcionando una interacción más dinámica y sencilla para el usuario.

Componentes utilizados

Para mantener una mejor organización del código, el proyecto fue dividido en distintos componentes, cada uno con una función específica.

App.jsx

Corresponde al componente principal de la aplicación. Desde este archivo se administra la información relacionada con las tareas y el tema visual, además de integrar el resto de los componentes utilizados.

TaskInput.jsx

Este componente se encarga de recibir la información ingresada por el usuario mediante el campo de texto y enviarla para que pueda ser agregada a la lista de tareas.

TaskList.jsx

Su función consiste en mostrar las tareas registradas dentro de la aplicación. En caso de no existir tareas, presenta un mensaje indicando que la lista se encuentra vacía.

TaskItem.jsx

Representa cada tarea de forma individual y proporciona el botón que permite eliminarla de la lista.

Decisiones de diseño

Se optó por desarrollar una aplicación tipo lista de tareas, ya que este tipo de proyecto permite aplicar de forma práctica los conceptos fundamentales de React, especialmente el uso de componentes, el manejo del estado mediante useState y la interacción con el usuario.

En cuanto al diseño, se decidió utilizar una interfaz sencilla y ordenada, incorporando colores personalizados, bordes redondeados y una distribución centrada para mejorar la presentación visual. Además, se añadió la opción de cambiar entre modo claro y modo oscuro con el objetivo de ofrecer una experiencia más atractiva y demostrar el uso dinámico del estado en React.

Finalmente, los componentes fueron organizados dentro de una carpeta denominada components, con el propósito de mantener una estructura más clara y facilitar la lectura y mantenimiento del código.