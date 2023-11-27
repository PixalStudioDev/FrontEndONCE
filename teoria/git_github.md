# Git y GitHub

## GitHub
¿Qué es y para que sirve GitHub?
Es un plataforma creada para alojar código de aplicaciones. En ella podemos crear repositorios con las aplicaciones que desarrollemos. 

## GIT
![img](../assets/git_logo.png) es un software de control de versiones.

### ¿Qué es el control de versiones?
Se llama control de versiones a la gestión de los diversos cambios que se realizan sobre los elementos de algún producto o una configuración del mismo. Una versión, revisión o edición de un producto, es el estado en el que se encuentra el mismo en un momento dado de su desarrollo o modificación.

Los sistemas de control de versiones son software que ayudan a realizar un seguimiento de los cambios realizados en el código a lo largo del tiempo. A medida que un desarrollador edita el código, el sistema de control de versiones toma una instantánea de los archivos.

[INSTALACIÓN](https://git-scm.com/download/win)

## Ramas 
Las ramas en git son una división del estado del código, esto permite crear nuevos caminos a favor de la evolución del código. Una rama representa una línea independiente de desarrollo. Las nuevas confirmaciones se registran en el historial de la rama actual, lo que crea una bifurcación en el historial del proyecto.

![img](../assets/git.png) 

Hay dos tipos principales de ramas:

### Ramas locales
Una rama local es una rama que existe en tu repositorio Git local (en tu máquina). Estas ramas se utilizan para desarrollar nuevas características, solucionar bugs o realizar cambios sin afectar a la rama principal (generalmente llamada master o main). 

### Ramas remotas
Una rama remota es una referencia a una rama en un repositorio remoto (como puede ser GitHub). Se utilizan para realizar el seguimiento de las ramas del repositorio remoto. Representan el estado del proyecto en el servidor y permiten sincronizar los cambios entre el repositorio local y el remoto. 

En resumen, las ramas locales son para el desarrollo y pruebas locales, mientras que las remotas se usan para la colaboración y sincronización del trabajo entre los diferentes repositorios (local y remoto).

## Commandos

## Clone
Git clone es un comando para descargarte el código fuente existente desde un repositorio remoto (como Github, por ejemplo).

```
    git clone path_repositorio
```

## Status
El comando de git status nos da toda la información necesaria sobre la rama actual. Podemos encontrar información como:

Si la rama actual está actualizada
Si hay algo para confirmar, enviar o recibir.
Si hay archivos en preparación , sin preparación o que no están recibiendo seguimiento.
Si hay archivos creados, modificados o eliminados.

```
    git status
```

### Add
Cuando creamos, modificamos o eliminamos un archivo, estos cambios suceden en local y no se incluirán en el siguiente commit (a menos que cambiemos la configuración).

Necesitamos usar el comando git add para incluir los cambios del o de los archivos en tu siguiente commit.
```
    git add <archivo>

    git add . //Añadir los cambios del directorio actual

    git add A //Añadir todo de una vez
```

NOTA: El comando git add no cambia el repositorio y los cambios que no han sido guardados hasta que no utilicemos el comando de confirmación git commit.

### Commit
Es una confirmación de cambios (commit). Git almacena una instantánea de tu trabajo preparado. Dicha instantánea contiene además unos metadatos con el autor y el mensaje explicativo.
Git commit es como establecer un punto de control en el proceso de desarrollo al cual puedes volver más tarde si es necesario.

También necesitamos escribir un mensaje corto para explicar qué hemos desarrollado o modificado en el código fuente.

```
    git commit -m "mensaje de confirmación"
```

NOTA: Git commit guarda tus cambios únicamente en local.

### Push
Después de haber confirmado tus cambios, el siguiente paso que quieres dar es enviar tus cambios al servidor remoto. Git push envía tus commits al repositorio remoto.

```
    git push

    git push -u origin <nombre-de-tu-rama> //si tu rama ha sido creada recientemente y no está en el repositorio remoto, puede que tengas que cargar y subir tu rama con este comando
```

### Fetch
Este comando descarga el contenido del repositorio remoto sin modificar el estado del repositorio local. No modifica el directorio de trabajo ni cambia la rama actual. Es el comando que le dice a tu git local que recupere la última información de los metadatos del original pero no hace ninguna transferencia de archivos.

Más bien es como **comprobar** si hay algún cambio disponible. Se utiliza para obtener información actualizada del repositorio remoto pero aún no estás listo para fusionar los cambios en local.

```
     git fetch
```

### Pull
Se utiliza para recibir actualizaciones del repositorio remoto. Este comando es una combinación del git fetch y del git merge lo cual significa que cundo usemos el git pull recogeremos actualizaciones del repositorio remoto (git fetch) e inmediatamente aplicamos estos últimos cambios en local (git merge). Se utiliza cuando deseas obtener los cambios más recientes desde el repositorio remoto y fusionarlos directamente en tu rama local de trabajo.

```
    git pull

    git pull origin <nombre-de-tu-rama>
```

Cuando ejecutas este comando, estás obteniendo los cambios de la rama remota actual a la que estás vinculado. Sin embargo, las ramas remotas no se actualizan automáticamente en tu sistema local hasta que realizas un seguimiento explícito de ellas.

Si has creado una nueva rama en el repositorio remoto después de tu última actualización, la rama remota aún no está presente en tu sistema local. Para trabajar con esta nueva rama, debes hacer un switch o checkout a esa rama para poder verla.

### Merge
Una vez se ha terminado de desarrollar la funcionalidad de una rama y todo funcione correctamente, se debe fusionar la rama con la rama padre (main, develop, back...)

El merge, como su nombre indica, mezcla todas las modificaciones de tu rama con las modificaciones realizadas en la rama padre. 

### Ejemplo
```
// Queremos fusionar la rama back con la rama develop. 

1. Para fusionar la rama back con la develop, lo primero será asegurarnos de que estamos en la rama develop (la rama con la que se quiere fusionar). Si no es así habrá que cambiarse a la rama:
    *git checkout develop*
    
2. Actualizar la rama develop local para ver si hay conflictos antes del fusionado:
    *git fetch*
    
3. Fusionar con la rama back
    *git merge back* 
```
NOTA: Asegúrate de que tu rama develop está actualizada (última versión) antes de fusionar otras ramas, si no aparecerán algunos conflictos no deseados. 

![img](../assets/conflicto.png)

### Diff
Este comando sirve para ver las diferencias el punto de partida de datos y las modificaciones realizadas.

```
git diff <nombre-fichero>

```

### Revert
Revert se usa para deshacer cambios ya confirmados (commiteados).

Antes que nada, necesitaríamos ver nuestro historial de commits para conocer el código del commit que queremos revertir, y para ello necesitamos utilizar el  siguiente comando:

```

git log
git log -- oneline //menos detallado

```

NOTA: para salir del log, presionar la letra q. 

Luego debemos ejecutar el siguiente comando para especificar el código que encontrarás junto al commit que queremos deshacer:

```

git revert <codigo>

```
NOTA: El comando git revert deshará el commit que le hemos indicado, pero creará un nuevo commit deshaciendo la anterior.

## Creación de ramas
Para crear ramas locales podemos usar el comando`:
```
    git branch <nombre_de_la_rama>
```

Las ramas remotas se crean automáticamente cuando clonas un repositorio, y puedes obtener una copia local de una rama remota utilizando git fetch o git pull. Las ramas remotas no se pueden cambiar directamente; en su lugar, trabajas en una rama local y luego sincronizas los cambios con el repositorio remoto.
```
    # Obtener cambios de la rama remota
    git fetch origin
    # Crear y cambiar a una rama local basada en una remota
    git checkout -b local-rama origin/remota-rama
    # o usando git switch
    git switch -c local-rama origin/remota-rama
```

## Ejercicios
1. Crea un repositorio en GitHub (repositorio remoto). 
2. Clona el repositorio en local. 
3. Crea un archivo.txt en tu repositorio local.
4. Sube el archivo al repositorio remoto. 
5. Modifica el archivo.txt en local y mira que le pasa al archivo en el repositorio remoto.
7. Busca el comando para borrar una rama, crea una nueva rama y bórrala.
8. Busca el comando para cambiar de una rama a otra, crea dos ramas y cambiate de una a otra. 
9. Busca el comando para crear una rama y cambiarte al mismo tiempo, crea una rama y prueba el comando. 

