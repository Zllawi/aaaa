document.getElementById('bmr-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height) || age <= 0 || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = 'الرجاء إدخال قيم صحيحة.';
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    document.getElementById('result').innerHTML = `
        <p>معدل الأيض الأساسي (BMR) هو: <strong>${bmr.toFixed(2)} سعرة حرارية/يوم</strong></p>
        <p class="text-muted small">هذا هو عدد السعرات الحرارية التي يحتاجها جسمك في حالة الراحة التامة. قد تحتاج إلى سعرات حرارية أكثر بناءً على مستوى نشاطك.</p>
    `;
});