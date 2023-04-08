function solve() {
    let count = 0;
    let tPoint = 0;
    const maps = new Map();
    let forDelete;
    const info = {
        id: null,
        title: null,
        description: null,
        label: null,
        points: null,
        assignee: null,
    };
    const inputSelectors = {
        id: document.getElementById("task-id"),
        title: document.getElementById("title"),
        description: document.getElementById("description"),
        label: document.getElementById("label"),
        points: document.getElementById("points"),
        assignee: document.getElementById("assignee"),
    };
    const otherSelectors = {
        createBtn: document.getElementById("create-task-btn"),
        section: document.getElementById("tasks-section"),
        totalPoints: document.getElementById("total-sprint-points"),
        deleteTaskBtn: document.getElementById("delete-task-btn"),

    };

    otherSelectors.createBtn.addEventListener("click", inCreate);
    otherSelectors.deleteTaskBtn.addEventListener(
        "click",


        inDelete
    );

    function inCreate(event) {
        event.preventDefault();
        count++;
        const {id, title, description, label, points, assignee} =
            inputSelectors;
        id.value = count;
        const validateInputs = Object.values(inputSelectors).every(
            (input) => input.value != ""
        );

        if (!validateInputs) {
            console.log("Empty Field!");
            return;
        }

        const article = createElement(
            "article",
            otherSelectors.section,
            "",
            `task-${id.value}`,
            ["task-card"]
        );

        if (label.value === "Feature") {
            let div = createElement("div", article, "", "", [
                "task-card-label",
                "feature",
            ]);
            div.innerHTML = "Feature &#8865";
        } else if (label.value === "Low Priority Bug") {
            let div = createElement("div", article, "", "", [
                "task-card-label",
                "low-priority",
            ]);
            div.innerHTML = "Low Priority Bug &#9737";
        } else if (label.value === "High Priority Bug") {
            let div = createElement("div", article, "", "", [
                "task-card-label",
                "high-priority",
            ]);
            div.innerHTML = "High Priority Bug &#9888";
        }

        createElement("h3", article, title.value, "", ["task-card-title"]);
        createElement("p", article, description.value, "", [
            "task-card-description",
        ]);
        createElement("div", article, `Estimated at ${points.value} pts`, "", [
            "task-card-points",
        ]);
        tPoint += Number(points.value);

        createElement("div", article, `Assigned to: ${assignee.value}`, "", [
            "task-card-assignee",
        ]);
        let div = createElement("div", article, "", "", ["task-card-actions"]);

        const deleteBtn = createElement("button", div, "Delete");

        deleteBtn.addEventListener("click", inDeleteOne);

        for (const key in inputSelectors) {
            info[key] = inputSelectors[key].value;
        }
        maps.set(id.value, info);

        otherSelectors.totalPoints.textContent = `Total Points ${tPoint}pts`;
        clear();
    }

    function inDelete() {
        forDelete.remove();
        Object.values(inputSelectors).forEach(
            (input) => {
                (input.value = "");
                (input.disabled = "")

            }
        );
        otherSelectors.createBtn.disabled = "";
        otherSelectors.deleteTaskBtn.disabled = "true";

    }

    function inDeleteOne(event) {
        let content = event.target.parentElement.parentElement.id;
        console.log(content);
        let text = content.split("-");
        let id = text[1];
        console.log(id);
        let objForDelete = maps.get(id);
        console.log(objForDelete);
        for (const key in inputSelectors) {
            inputSelectors[key].value = objForDelete[key];
        }
        forDelete = event.target.parentElement.parentElement;
        count--;
        tPoint -= Number(info.points);
        otherSelectors.totalPoints.textContent = `Total Points ${tPoint}pts`;
        Object.values(inputSelectors).forEach(
            (input) => (input.disabled = "true")
        );
        otherSelectors.createBtn.disabled = "true";
        otherSelectors.deleteTaskBtn.disabled = "";
    }

    function clear() {
        Object.values(inputSelectors).forEach((input) => (input.value = ""));
    }

    function createElement(type, parent, content, id, classes, attributes) {

        const element = document.createElement(type);


        if (content) {
            if (type !== "input" && type !== "textarea") {
                element.textContent = content;
            } else {
                element.value = content;
            }
        }


        if (id) {
            element.setAttribute("id", id);
        }


        if (classes) {
            for (const clazz of classes) {
                element.classList.add(clazz);
            }
        }


        if (parent) {
            parent.appendChild(element);
        }


        if (attributes) {
            for (const key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }
        return element;
    }
}

solve();