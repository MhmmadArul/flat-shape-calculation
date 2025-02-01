// warning if input is empty
let alertWarning = document.querySelector('.alert');

// SQUARE
// Perimeter Square
const btn_perimeter_square_calc = document.querySelector('#btn-perimeter-square-calc');
const btn_perimeter_square_reset = document.querySelector('#btn-perimeter-square-reset');

btn_perimeter_square_calc.addEventListener('click', function () {
    const perimeter_side_input = parseFloat(document.querySelector('#perimeter-side-square').value);
    const result_perimeter_square = document.querySelector('.result-perimeter-square');


    const calc_perimeter_square = perimeter_side_input * perimeter_side_input * perimeter_side_input * perimeter_side_input;

    if (isNaN(perimeter_side_input)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        result_perimeter_square.innerHTML = "Perimater of a square = " + calc_perimeter_square;
    }

})
btn_perimeter_square_reset.addEventListener('click', function () {
    const perimeter_side_input = document.querySelector('#perimeter-side-square');
    const result_perimeter_square = document.querySelector('.result-perimeter-square');

    perimeter_side_input.value = '';
    result_perimeter_square.innerHTML = '';
})


// Area Square
const btn_area_square_calc = document.querySelector('#btn-area-square-calc');
const btn_area_square_reset = document.querySelector('#btn-area-square-reset');

btn_area_square_calc.addEventListener('click', function () {
    const area_side_input1 = parseFloat(document.querySelector('#area-side-square1').value);
    const area_side_input2 = parseFloat(document.querySelector('#area-side-square2').value);
    const result_area_square = document.querySelector('.result-area-square');

    const calc_area_square = area_side_input1 * area_side_input2;

    if (isNaN(area_side_input1) || isNaN(area_side_input2)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        result_area_square.innerHTML = "Area of a square = " + calc_area_square;
    }
})

btn_area_square_reset.addEventListener('click', function () {
    const area_side_input1 = document.querySelector('#area-side-square1');
    const area_side_input2 = document.querySelector('#area-side-square2');
    const result_area_square = document.querySelector('.result-area-square');

    area_side_input1.value = "";
    area_side_input2.value = "";
    result_area_square.innerHTML = "";
})


// RECTANGLE
// Perimeter Rectangle
const btn_perimeter_rectangle_calc = document.querySelector('#btn-perimeter-rectangle-calc');
const btn_perimeter_rectangle_reset = document.querySelector('#btn-perimeter-rectangle-reset');

btn_perimeter_rectangle_calc.addEventListener('click', function () {
    const rectangle_perimeter_length = parseFloat(document.querySelector('#rectangle-perimeter-length').value);
    const rectangle_perimeter_width = parseFloat(document.querySelector('#rectangle-perimeter-width').value);
    const rectangle_perimeter_result = document.querySelector('.rectangle-perimeter-result')

    const calc_perimeter_rectangle = 2 * (rectangle_perimeter_length + rectangle_perimeter_width);

    if (isNaN(rectangle_perimeter_length) || isNaN(rectangle_perimeter_width)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000)
    } else {
        rectangle_perimeter_result.innerHTML = "Perimeter of a rectangle = " + calc_perimeter_rectangle;
    }
})

btn_perimeter_rectangle_reset.addEventListener('click', function () {
    const rectangle_perimeter_length = document.querySelector('#rectangle-perimeter-length');
    const rectangle_perimeter_width = document.querySelector('#rectangle-perimeter-width');
    const rectangle_perimeter_result = document.querySelector('.rectangle-perimeter-result');

    rectangle_perimeter_length.value = "";
    rectangle_perimeter_width.value = "";
    rectangle_perimeter_result.innerHTML = "";

})

// Area Rectangle
const btn_area_rectangle_calc = document.querySelector('#btn-area-rectangle-calc');
const btn_area_rectangle_reset = document.querySelector('#btn-area-rectangle-reset');

btn_area_rectangle_calc.addEventListener('click', function () {
    const rectangle_area_length = parseFloat(document.querySelector('#rectangle-area-length').value);
    const rectangle_area_width = parseFloat(document.querySelector('#rectangle-area-width').value);
    const rectangle_area_result = document.querySelector('.rectangle-area-result');

    const rectangle_area_calc = rectangle_area_length * rectangle_area_width;

    if (isNaN(rectangle_area_length) || isNaN(rectangle_area_width)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000)
    } else {
        rectangle_area_result.innerHTML = "Area of a rectangle = " + rectangle_area_calc;
    }
})

btn_area_rectangle_reset.addEventListener('click', function () {
    const rectangle_area_length = document.querySelector('#rectangle-area-length');
    const rectangle_area_width = document.querySelector('#rectangle-area-width');
    const rectangle_area_result = document.querySelector('.rectangle-area-result');

    rectangle_area_length.value = "";
    rectangle_area_width.value = "";
    rectangle_area_result.innerHTML = "";
})


// TRIANGLE
// Perimeter triangle
const btn_perimeter_triangle_calc = document.querySelector('#btn-perimeter-triangle-calc');
const btn_perimeter_triangle_reset = document.querySelector('#btn-perimeter-triangle-reset');


btn_perimeter_triangle_calc.addEventListener('click', function () {
    const triangle_sideA = parseFloat(document.querySelector('#triangle-perimeter-sideA').value);
    const triangle_sideB = parseFloat(document.querySelector('#triangle-perimeter-sideB').value);
    const triangle_sideC = parseFloat(document.querySelector('#triangle-perimeter-sideC').value);

    const triangle_perimeter_result = document.querySelector('.triangle-perimeter-result');

    const triangle_perimeter_calc = triangle_sideA + triangle_sideB + triangle_sideC;

    if (isNaN(triangle_sideA) || isNaN(triangle_sideB) || isNaN(triangle_sideC)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        triangle_perimeter_result.innerHTML = "Perimeter of a triangle = " + triangle_perimeter_calc
    }
})

btn_perimeter_triangle_reset.addEventListener('click', function () {
    const triangle_sideA = document.querySelector('#triangle-perimeter-sideA');
    const triangle_sideB = document.querySelector('#triangle-perimeter-sideB');
    const triangle_sideC = document.querySelector('#triangle-perimeter-sideC');

    const triangle_perimeter_result = document.querySelector('.triangle-perimeter-result');

    triangle_sideA.value = "";
    triangle_sideB.value = "";
    triangle_sideC.value = "";
    triangle_perimeter_result.innerHTML = "";
})


// Area triangle
const btn_area_triangle_calc = document.querySelector('#btn-area-triangle-calc');
const btn_area_triangle_reset = document.querySelector('#btn-area-triangle-reset');

btn_area_triangle_calc.addEventListener('click', function () {
    const triangle_base = parseFloat(document.querySelector('#triangle-area-base').value);
    const triangle_height = parseFloat(document.querySelector('#triangle-area-height').value);

    const triangle_area_result = document.querySelector('.triangle-area-result');

    const triangle_area_calc = 1 / 2 * triangle_base * triangle_height;

    if (isNaN(triangle_base) || isNaN(triangle_height)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        triangle_area_result.innerHTML = "Area of a triangle = " + triangle_area_calc;
    }
})

btn_area_triangle_reset.addEventListener('click', function () {
    const triangle_base = document.querySelector('#triangle-area-base');
    const triangle_height = document.querySelector('#triangle-area-height');

    const triangle_area_result = document.querySelector('.triangle-area-result');

    triangle_base.value = "";
    triangle_height.value = "";
    triangle_area_result.innerHTML = "";
})


// PARALLELOGRAM
// Perimeter Parallelogram
const btn_perimeter_parallelogram_calc = document.querySelector('#btn-perimeter-parallelogram-calc');
const btn_perimeter_parallelogram_reset = document.querySelector('#btn-perimeter-parallelogram-reset');

btn_perimeter_parallelogram_calc.addEventListener('click', function () {
    const parallelogram_base = parseFloat(document.querySelector('#parallelogram-base').value);
    const parallelogram_side = parseFloat(document.querySelector('#parallelogram-side').value);
    const parallelogram_perimeter_result = document.querySelector('.parallelogram-perimeter-result');

    const parallelogram_perimeter_calc = 2 * (parallelogram_base + parallelogram_side);

    if (isNaN(parallelogram_base) || isNaN(parallelogram_side)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000)
    } else {
        parallelogram_perimeter_result.innerHTML = `Perimeter of a parallelogram = ${parallelogram_perimeter_calc}`;
    }
})

btn_perimeter_parallelogram_reset.addEventListener('click', function () {
    const parallelogram_base = document.querySelector('#parallelogram-base');
    const parallelogram_side = document.querySelector('#parallelogram-side');
    const parallelogram_perimeter_result = document.querySelector('.parallelogram-perimeter-result');

    parallelogram_base.value = "";
    parallelogram_side.value = "";
    parallelogram_perimeter_result.innerHTML = "";
})


// Area Parallelogram
const btn_area_parallelogram_calc = document.querySelector('#btn-area-parallelogram-calc');
const btn_area_parallelogram_reset = document.querySelector('#btn-area-parallelogram-reset');

btn_area_parallelogram_calc.addEventListener('click', function () {
    const parallelogram_area_base = parseFloat(document.querySelector('#parallelogram-area-base').value);
    const parallelogram_area_height = parseFloat(document.querySelector('#parallelogram-area-height').value);
    const parallelogram_area_result = document.querySelector('.parallelogram-area-result');

    const parallelogram_area_calc = parallelogram_area_base * parallelogram_area_height;

    if (isNaN(parallelogram_area_base) || isNaN(parallelogram_area_height)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000)
    } else {
        parallelogram_area_result.innerHTML = `Area of a parallelogram = ${parallelogram_area_calc}`;
    }
})

btn_area_parallelogram_reset.addEventListener('click', function () {
    const parallelogram_area_base = document.querySelector('#parallelogram-area-base');
    const parallelogram_area_height = document.querySelector('#parallelogram-area-height');
    const parallelogram_area_result = document.querySelector('.parallelogram-area-result');

    parallelogram_area_base.value = "";
    parallelogram_area_height.value = "";
    parallelogram_area_result.innerHTML = "";
})



// RHOMBUS
// Perimeter rhombus
const btn_perimeter_rhombus_calc = document.querySelector('#btn-perimeter-rhombus-calc');
const btn_perimeter_rhombus_reset = document.querySelector('#btn-perimeter-rhombus-reset');

btn_perimeter_rhombus_calc.addEventListener('click', function () {
    const rhombus_side = parseFloat(document.querySelector('#rhombus-side').value);
    const rhombus_perimeter_result = document.querySelector('.rhombus-perimeter-result');

    const rhombus_perimeter_calc = 4 * rhombus_side;

    if (isNaN(rhombus_side)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000)
    } else {
        rhombus_perimeter_result.innerHTML = `Perimeter of a rhombus = ${rhombus_perimeter_calc}`;
    }
});

btn_perimeter_rhombus_reset.addEventListener('click', function () {
    const rhombus_side = document.querySelector('#rhombus-side');
    const rhombus_perimeter_result = document.querySelector('.rhombus-perimeter-result');

    rhombus_side.value = "";
    rhombus_perimeter_result.innerHTML = "";
})


// Area Rhombus 
const btn_area_rhombus_calc = document.querySelector('#btn-area-rhombus-calc');
const btn_area_rhombus_reset = document.querySelector('#btn-area-rhombus-reset');

btn_area_rhombus_calc.addEventListener('click', function () {
    const rhombus_diagonal1 = parseFloat(document.querySelector('#rhombus-diagonal1').value);
    const rhombus_diagonal2 = parseFloat(document.querySelector('#rhombus-diagonal2').value);
    const rhombus_area_result = document.querySelector('.rhombus-area-result');

    const rhombus_area_calc = 1 / 2 * rhombus_diagonal1 * rhombus_diagonal2;

    if (isNaN(rhombus_diagonal1) || isNaN(rhombus_diagonal2)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        rhombus_area_result.innerHTML = `Area of rhombus = ${rhombus_area_calc}`;
    }
})

btn_area_rhombus_reset.addEventListener('click', function () {
    const rhombus_diagonal1 = document.querySelector('#rhombus-diagonal1');
    const rhombus_diagonal2 = document.querySelector('#rhombus-diagonal2');
    const rhombus_area_result = document.querySelector('.rhombus-area-result');

    rhombus_diagonal1.value = "";
    rhombus_diagonal2.value = "";
    rhombus_area_result.innerHTML = "";
})


// Trapezium
// Perimeter Trapezium
const btn_perimeter_trapezium_calc = document.querySelector('#btn-perimeter-trapezium-calc');
const btn_perimeter_trapezium_reset = document.querySelector('#btn-perimeter-trapezium-reset');

btn_perimeter_trapezium_calc.addEventListener('click', function () {
    const trapezium_sideA = parseFloat(document.querySelector('#trapezium-sideA').value);
    const trapezium_sideB = parseFloat(document.querySelector('#trapezium-sideB').value);
    const trapezium_sideC = parseFloat(document.querySelector('#trapezium-sideC').value);
    const trapezium_sideD = parseFloat(document.querySelector('#trapezium-sideD').value);

    const trapezium_perimeter_result = document.querySelector('.trapezium-perimeter-result');
    const trapezium_perimeter_calc = trapezium_sideA + trapezium_sideB + trapezium_sideC + trapezium_sideD;

    if (isNaN(trapezium_sideA) || isNaN(trapezium_sideB) || isNaN(trapezium_sideC) || isNaN(trapezium_sideD)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        trapezium_perimeter_result.innerHTML = `Perimeter of a trapezium = ${trapezium_perimeter_calc}`;
    }
})
btn_perimeter_trapezium_reset.addEventListener('click', function () {
    const trapezium_sideA = document.querySelector('#trapezium-sideA');
    const trapezium_sideB = document.querySelector('#trapezium-sideB');
    const trapezium_sideC = document.querySelector('#trapezium-sideC');
    const trapezium_sideD = document.querySelector('#trapezium-sideD');

    const trapezium_perimeter_result = document.querySelector('.trapezium-perimeter-result');

    trapezium_sideA.value = "";
    trapezium_sideB.value = "";
    trapezium_sideC.value = "";
    trapezium_sideD.value = "";
    trapezium_perimeter_result.innerHTML = "";
})


// Area trapezium
const btn_area_trapezium_calc = document.querySelector('#btn-area-trapezium-calc');
const btn_area_trapezium_reset = document.querySelector('#btn-area-trapezium-reset');

btn_area_trapezium_calc.addEventListener('click', function () {
    const trapezium_area_sideA = parseFloat(document.querySelector('#trapezium-area-sideA').value);
    const trapezium_area_sideB = parseFloat(document.querySelector('#trapezium-area-sideB').value);
    const trapezium_area_height = parseFloat(document.querySelector('#trapezium-area-height').value);

    const trapezium_area_result = document.querySelector('.trapezium-area-result');
    const trapezium_area_calc = (trapezium_area_sideA + trapezium_area_sideB) * trapezium_area_height / 2;

    if (isNaN(trapezium_area_sideA) || isNaN(trapezium_area_sideB) || isNaN(trapezium_area_height)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        trapezium_area_result.innerHTML = `Area of a trapezium = ${trapezium_area_calc}`;
    }
})
btn_area_trapezium_reset.addEventListener('click', function () {
    const trapezium_area_sideA = document.querySelector('#trapezium-area-sideA');
    const trapezium_area_sideB = document.querySelector('#trapezium-area-sideB');
    const trapezium_area_height = document.querySelector('#trapezium-area-height');

    const trapezium_area_result = document.querySelector('.trapezium-area-result');

    trapezium_area_sideA.value = "";
    trapezium_area_sideB.value = "";
    trapezium_area_height.value = "";
    trapezium_area_result.innerHTML = "";
})


// Circle
// Perimeter Circle
btn_perimeter_circle_calc = document.querySelector('#btn-perimeter-circle-calc');
btn_perimeter_circle_reset = document.querySelector('#btn-perimeter-circle-reset');

btn_perimeter_circle_calc.addEventListener('click', function () {
    const circle_radius = parseFloat(document.querySelector('#circle-radius').value);
    const circle_perimeter_result = document.querySelector('.circle-perimeter-result');

    const circle_perimeter_calc = 2 * Math.PI * circle_radius;
    if (isNaN(circle_radius)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000)
    } else {
        circle_perimeter_result.innerHTML = `Perimeter of a circle = ${circle_perimeter_calc}`;
    }
})

btn_perimeter_circle_reset.addEventListener('click', function () {
    const circle_radius = document.querySelector('#circle-radius');
    const circle_perimeter_result = document.querySelector('.circle-perimeter-result');

    circle_radius.value = "";
    circle_perimeter_result.innerHTML = "";
})


// Area Circle
btn_area_circle_calc = document.querySelector('#btn-area-circle-calc');
btn_area_cricle_reset = document.querySelector('#btn-area-circle-reset');

btn_area_circle_calc.addEventListener('click', function () {
    const radius_area_a = parseFloat(document.querySelector('#radius-areaA').value);
    const radius_area_b = parseFloat(document.querySelector('#radius-areaB').value)
    const circle_area_result = document.querySelector('.circle-area-result')

    const circle_area_calc = Math.PI * radius_area_a * radius_area_b;
    if (isNaN(radius_area_a) || isNaN(radius_area_b)) {
        alertWarning.style.display = "block";
        setTimeout(() => {
            alertWarning.style.display = "none";
        }, 2000);
    } else {
        circle_area_result.innerHTML = `Area of a circle = ${circle_area_calc}`;
    }
})

btn_area_cricle_reset.addEventListener('click', function () {
    const radius_area_a = document.querySelector('#radius-areaA')
    const radius_area_b = document.querySelector('#radius-areaB')
    const circle_area_result = document.querySelector('.circle-area-result')

    radius_area_a.value = "";
    radius_area_b.value = "";
    circle_area_result.innerHTML = "";
})
