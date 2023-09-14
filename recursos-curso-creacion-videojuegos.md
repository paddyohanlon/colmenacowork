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
- Crear un archivo `PlayerController.cs`:
  - Hacer `Debug.Log`
  - Hacer movimiento vertical (cambiar el color en Playmode)
  - Hacer rotación
  - Hacer variables para velocidad y rotación
  - Conectar animaciones
  - Mover cámara con jugador

### Código

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
