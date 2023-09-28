---
layout: page
title: Recursos para el Curso de Creación de Videojuegos para Jóvenes
description: Recursos para el curso de creación de videojuegos para jóvenes en La Colmena Coworking, Prado del Rey.
image: assets/images/social/curso-videojuegos.jpg
lang: es
ref: videojuegos
---

## Clase 1

- Conectar al Wifi
- [Instalar Unity](https://unity.com/es/download)
- Instalar Visual Studio desde Unity Hub
- Crear una cuenta de Unity (crear un correo electrónico si es necesario con [Proton](https://proton.me/es-es/mail/pricing))
- [Descargar entorno](https://assetstore.unity.com/packages/3d/environments/landscapes/rpg-poly-pack-lite-148410)
- [Descargar jugador](https://assetstore.unity.com/packages/3d/characters/humanoids/character-pack-free-sample-79870)

### Pasos

- Crear un nuevo proyecto 3D
- Importar entorno y crear el entorno (aprender a navegar en Unity)
- Importar jugador, añadir texturas y Character Controller (colisionador y SimpleMove)

## Clase 2

[Vídeo clase 2](https://youtu.be/WbzZqwItE90)

- Cambiar la posición del Character Controller (height: 1, Center Y: 0.5). Así el colisionador (Collider) cubrirá al personaje.
- Añadir un script al personaje llamado PlayerController.
- Encontrad el script en la carpeta Assets, en la pantalla Project, y abridlo (se abrirá automáticamente en Visual Studio).

Observad que ya contiene este código:

{% highlight csharp %}
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
{% endhighlight %}

- Poned `Debug.Log("Start!");` en `Start() { ... }` y observad el efecto en la consola (Console).
- Poned este código en `Update() { ... }` y observad el efecto en la consola (Console):

{% highlight csharp %}
float speed = Input.GetAxis("Vertical");

if (speed != 0) // el jugador se mueve
{
    Debug.Log(speed);
}
{% endhighlight %}

- Hacer movimiento vertical (cambiar el color en Playmode)
- Hacer rotación
- Conectar animaciones (Añadir controlador de animación)
- Mover la cámara con el jugador

## Clase 3

[Video 3](https://youtu.be/PTJCh3ZJT9M)

- Hacer animaciones con rotación del personaje
- Añadir un objeto para colectar (por ejemplo, un vaso o contenedor)
- Añadir componente "Box Collider" y hacer clic en "Is Trigger"
- Crear un script `VasoController`
- Animarlo con rotación
- Etiquetar tu personaje como "Player"
- Añadir método para detectar la colisión y hacer el objeto invisible

{% highlight csharp %}
// VasoController.cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VasoController : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(Vector3.up * 0.2f);
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            gameObject.SetActive(false);
        }
    }
}
{% endhighlight %}

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

        if (speed == 0)
        {
            anim.SetFloat("MoveSpeed", Input.GetAxis("Horizontal"));
        }

        transform.Rotate(0, Input.GetAxis("Horizontal") * rotateSpeed, 0);

        Vector3 forward = transform.TransformDirection(Vector3.forward);

        CharacterController controller = GetComponent<CharacterController>();
        controller.SimpleMove(forward * speed * moveSpeed);
    }
}
{% endhighlight %}
