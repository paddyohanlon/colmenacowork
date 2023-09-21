---
layout: page
title: Recursos para el Curso de Creación Videojuegos para Jóvenes
description: Recursos para el curso creación videojuegos para jóvenes en La Colmena Coworking, Prado del Rey.
image: assets/images/social/curso-videojuegos.jpg
lang: es
ref: videojuegos
---

## Clase 1

- Conectar al Wifi
- [Instalar Unity](https://unity.com/es/download)
- Instalar Visual Studio desde Unity Hub
- Crear cuenta de Unity (crear un email si es necesario con [Proton](https://proton.me/es-es/mail/pricing))
- [Descargar entorno](https://assetstore.unity.com/packages/3d/environments/landscapes/rpg-poly-pack-lite-148410)
- [Descargar judagor](https://assetstore.unity.com/packages/3d/characters/humanoids/character-pack-free-sample-79870)

### Pasos

- Crear nuevo proyecto 3D
- Importar entorno y crear entorno (aprender navigar Unity)
- Importar judagor y añadir texturas y Character Controller (colisionador y SimpleMove)

## Clase 2

[Vídeo clase 2](https://youtu.be/WbzZqwItE90)

- Cambiar la posición del Character Controller (height: 1, Center Y: 0.5). Así el colisionador (Collider) cubre el personaje.
- Añadir un script al personaje llamada PlayerController.
- Encuentra el script en la carpeta Assets, en la pantalla Project, y ábrelo (va a abrirse en Visual Studio automáticamente).

Ve que ya contiene este código:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
```

- Pon `Debug.Log("Start!");` en `Start() { ... }`. y observa el efecto en la consola (Console).
- Pon este código en `Update() { ... }`. y observa el efecto en la consola (Console).:

```csharp
float speed = Input.GetAxis("Vertical");

if (speed != 0) // el jugador se mueve
{
    Debug.Log(speed);
}
```

- Hacer movimiento vertical (cambiar el color en Playmode)
- Hacer rotación
- Hacer variables para velocidad y rotación
- Conectar animaciones (Añadir controller de animación)
- Mover cámara con jugador

### Código Completo

{% highlight csharp %}
// PlayerController.cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float moveSpeed = 4.0f;
    public float rotateSpeed = 1.0f;

    // Start is called before the first frame update
    void Start()
    {
        //Debug.Log("Start!");

        Animator anim = GetComponent<Animator>();

        anim.SetBool("Grounded", true);
    }

    // Update is called once per frame
    void Update()
    {
        float speed = Input.GetAxis("Vertical");

        Animator anim = GetComponent<Animator>();

        anim.SetFloat("MoveSpeed", speed);

        transform.Rotate(0, Input.GetAxis("Horizontal") * rotateSpeed, 0);

        //if (speed != 0) // el jugador se mueve
        //{
        //    Debug.Log(speed);
        //}

        Vector3 forward = transform.TransformDirection(Vector3.forward);

        CharacterController controller = GetComponent<CharacterController>();
        controller.SimpleMove(forward * speed * moveSpeed);
    }
}
{% endhighlight %}
