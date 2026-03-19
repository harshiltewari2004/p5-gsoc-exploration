    let myShader;

    function setup() {
    createCanvas(400, 400, WEBGL);
    noStroke();

    myShader = baseColorShader().modify({
        'vec4 getFinalColor(vec4 color)': `
        {
            color.r += 0.3;
            return color;
        }
        `
    });
    }

    function draw() {
    background(0);

    shader(myShader);

    rotateY(frameCount * 0.01);
    box(150);
    }