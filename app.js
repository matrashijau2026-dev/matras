const tbody =
document.querySelector("#assessmentTable tbody");

athletes.forEach((athlete) => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${athlete.nama}</td>

        <td>
            <input type="number"
                   class="vo2"
                   min="0"
                   max="100">
        </td>

        <td>
            <input type="number"
                   class="strength"
                   min="0"
                   max="100">
        </td>

        <td>
            <input type="number"
                   class="agility"
                   min="0"
                   max="100">
        </td>

        <td>
            <input type="number"
                   class="speed"
                   step="0.01">
        </td>
    `;

    tbody.appendChild(row);

});
