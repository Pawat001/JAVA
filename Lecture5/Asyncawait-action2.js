function who() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve("@");
        }, 200);
    });
}

function what() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("lurks");
        }, 300);
    });
}

function where() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("In the shadow");
        }, 500);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const v = await await();

    
}