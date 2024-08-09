// shader.js

// Funzione per inizializzare il contesto WebGL sul canvas fornito
function initWebGL(canvas) {
    // Ottiene il contesto WebGL standard o sperimentale
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
        alert("Impossibile inizializzare WebGL. Il browser potrebbe non supportarlo.");
        return null;
    }
    return gl;
}

// Funzione per creare uno shader di tipo specificato (vertex o fragment)
function createShader(gl, type, source) {
    const shader = gl.createShader(type);  // Crea lo shader del tipo specificato
    gl.shaderSource(shader, source);       // Carica il codice sorgente nello shader
    gl.compileShader(shader);              // Compila lo shader

    // Verifica gli errori di compilazione
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Errore nella compilazione dello shader:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);  // Cancella lo shader in caso di errore
        return null;
    }
    return shader;
}

// Funzione per creare un programma shader collegando vertex e fragment shader
function createShaderProgram(gl, vertexShaderSource, fragmentShaderSource) {
    // Crea i vertex e fragment shader
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return null;

    // Crea il programma shader e collega gli shader creati
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // Verifica gli errori di collegamento
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error("Errore nel collegamento del programma shader:", gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;
}

// Funzione per inizializzare la scena WebGL e ritornare il programma shader creato
function initScene(gl) {
    // Codice sorgente del vertex shader
    const vertexShaderSource = `
        attribute vec4 aVertexPosition;
        void main(void) {
            gl_Position = aVertexPosition;
        }
    `;

    // Codice sorgente del fragment shader
    const fragmentShaderSource = `
        precision mediump float;

        uniform vec2 uResolution;
        uniform float uTime;

        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        void main(void) {
            vec2 st = gl_FragCoord.xy / uResolution;  // Coordinate normalizzate
            vec3 color = vec3(0.0);                   // Inizializza il colore base

            // Generazione del colore con gradiente e rumore
            color = mix(vec3(0.169,0.020,0.580), vec3(0.141,0.039,0.596), st.x * cos(uTime));
            color = mix(color, vec3(0.141,0.039,0.596), st.y * ((sin(uTime) + 1.0) / 2.0 * 0.5 + 0.5));
            color = mix(color, vec3(0.498,0.416,0.851), st.y * sin(uTime));

            float noise = random(st * uResolution / 20.0);  // Calcola il rumore
            color += noise * 0.05;  // Aggiunge il rumore al colore

            gl_FragColor = vec4(color, 1.0);  // Imposta il colore del pixel
        }
    `;

    // Crea il programma shader utilizzando i due shader creati
    const shaderProgram = createShaderProgram(gl, vertexShaderSource, fragmentShaderSource);
    gl.useProgram(shaderProgram);  // Usa il programma shader

    // Definizione dei vertici del rettangolo
    const vertices = new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
         1.0,  1.0
    ]);

    // Crea il buffer per i vertici e carica i dati
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Ottiene la posizione dell'attributo 'aVertexPosition'
    const aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(aVertexPosition);  // Abilita l'attributo
    gl.vertexAttribPointer(aVertexPosition, 2, gl.FLOAT, false, 0, 0);  // Specifica il layout del buffer

    // Ottiene la posizione dell'uniform 'uResolution' e imposta il valore
    const uResolution = gl.getUniformLocation(shaderProgram, "uResolution");
    gl.uniform2f(uResolution, gl.canvas.width, gl.canvas.height);  // Passa la risoluzione del canvas

    // Ritorna il programma shader creato
    return shaderProgram;
}

// Funzione principale che gestisce il caricamento e l'inizializzazione WebGL
function main() {
    const canvas = document.getElementById("glCanvasBlue");  // Ottiene il riferimento al canvas HTML
    canvas.width = window.innerWidth;  // Imposta la larghezza del canvas
    canvas.height = window.innerHeight;  // Imposta l'altezza del canvas

    const gl = initWebGL(canvas);  // Inizializza il contesto WebGL
    if (!gl) return;  // Esce se WebGL non è supportato

    const shaderProgram = initScene(gl);  // Inizializza la scena WebGL e ottiene il programma shader

    // Funzione per aggiornare il tempo e renderizzare il frame successivo
    function renderFrame() {
        // Calcola il tempo trascorso
        const currentTime = performance.now();  // Tempo in millisecondi
        const elapsedTime = currentTime / 1000.0;  // Tempo in secondi

        // Passa il tempo come uniform al programma shader
        const uTime = gl.getUniformLocation(shaderProgram, "uTime");
        gl.uniform1f(uTime, elapsedTime);

        // Imposta il colore di sfondo e cancella il buffer
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Disegna il rettangolo utilizzando i vertici
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        // Richiedi il prossimo frame
        requestAnimationFrame(renderFrame);
    }

    // Avvia il rendering dei frame
    renderFrame();
}

main();  // Avvia l'applicazione al caricamento della pagina