let newCSS = { borderRadius: "2rem" };

(function () {
    /** Define variable */
    let cssValue = `0.25rem`;
    let customCorner = false;
    let cssTransform = `scale(1)`;


    /** DOM Selection */
    let box = document.querySelector("#box");
    let scale = document.querySelector("#scale");
    let borderWidth = document.querySelector("#borderWidth");
    let radius = document.querySelector("#borderRadius");

    function assignCSS() {
        Object.assign(box.style, newCSS);
    } //assignCSS();

    function scaleFunc() {
        let zoom = scale.value / 20;
        cssTransform = `scale(${zoom})`;
        box.style.transform = cssTransform;
        //console.log(cssTransform);
        generatedCode();
    }

    function widthFunc() {
        scaleInRem = borderWidth.value / 16;
        cssValue = `${scaleInRem}rem`
        //console.log(cssValue);
        box.style.borderWidth = cssValue;
        generatedCode();
    }

    function radiusFunc() {
        let rd = `${radius.value / 10}rem`;
        //box.style.borderRadius = rd;
        //console.log(borderRadius);
        //cssRadius = rd;
        if (customCorner === false) {
            newCSS.borderRadius = rd;
        }
        assignCSS();
        generatedCode();
    }

    /** Event Listeners */
    scale.addEventListener("input", scaleFunc);
    borderWidth.addEventListener("input", widthFunc);
    radius.addEventListener("input", radiusFunc);


    function cornerFunc() {
        const stroke = document.querySelectorAll(".stroke");
        const borderArr = ["2rem", "2rem", "2rem", "2rem"];
        let corner = `${borderArr[0]} ${borderArr[1]} ${borderArr[2]} ${borderArr[3]}`;

        stroke.forEach(element => {
            function status() {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                } else {
                    element.classList.add("active");
                    newCSS.borderRadius = corner;
                    assignCSS();
                    generatedCode()
                    console.log(newCSS.borderRadius);
                }
            }
            element.addEventListener("click", status);
        });
    } cornerFunc();


    /** Generate CSS */
    function generatedCode() {
        document.getElementById("borderValue").innerHTML = cssValue + ";";
        document.getElementById("radiusValue").innerHTML = newCSS.borderRadius + ";";
        document.getElementById("transformValue").innerHTML = cssTransform + ";";
    } generatedCode();

    let allCSS = `border: ${cssValue}; border-radius: ${newCSS.borderRadius}; transform: ${cssTransform};`;
    const btnCopy = document.querySelector("#copyCSS");
    btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(allCSS);//console.log(allCSS);
        btnCopy.innerHTML = "Copied";
    });
})();

{
    function inputColor() {
        const color = document.querySelector("#inputColor");
        const custom = document.querySelector("#colorCode");
        const box = document.querySelector("#box");
        const valueBox = document.querySelector("#valueBox");

        function setColor(color) {
            box.style.borderColor = color;
            valueBox.style.borderColor = color;
        }

        /* Default Call */
        custom.setAttribute("value", color.value);

        function onInput() {
            custom.setAttribute("value", color.value);
            setColor(color.value);
        }
        color.addEventListener("input", onInput);

        function customCode() {
            if (custom.value.length === 7) {
                color.setAttribute("value", custom.value);
                setColor(custom.value);
            } else {
                custom.setAttribute("value", color.value);
                setColor(color.value);
            }
            //console.log(custom.value.length);
        }
        custom.addEventListener("input", customCode)
    } inputColor();
}
