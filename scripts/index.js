function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Очікував ${expected}, отримав ${actual}`);
            }
        }
    };
}

function test(name, fn) {
    try {
        fn();
        console.log(`✅ ${name}`);
    } catch (error) {
        console.log(`❌ ${name}\n   ${error.message}`);
    }
}


// TASK 1
console.log("=== TASK 1 ====");
function getAgeCategory(age) {
    if (age >= 0 && age <= 12) {
        return "дитина";
    }
    else if (age >= 13 && age <= 17) {
        return "підліток";
    }
    else if (age >= 18 && age <= 64) {
        return "дорослий";
    }
    else if (age >= 65) {
        return "пенсіонер";
    }
    else {
        return "некоректний вік";
    }
}

test("Check type of people using there age", () => {
    expect(getAgeCategory(11)).toBe("підліток");
});


test("Check type of people using there age", () => {
    expect(getAgeCategory(1)).toBe("дитина");
});


test("Check type of people using there age", () => {
    expect(getAgeCategory(13)).toBe("підліток");
});


test("Check type of people using there age", () => {
    expect(getAgeCategory(64)).toBe("дорослий");
});


test("Check type of people using there age", () => {
    expect(getAgeCategory(100)).toBe("пенсіонер");
});


test("Check type of people using there age", () => {
    expect(getAgeCategory(-1)).toBe("дитина");
});


test("Check type of people using there age", () => {
    expect(getAgeCategory(-2)).toBe("некоректний вік");
});

console.log("=== TASK 2 ===");

// TASK 2
function calculateTotal(price, quantity, discount = 0) {
    if (price <= 0 || quantity <= 0 || discount >= 100) {
        return null;
    }

    const totalPrice = price * quantity - (price * quantity / 100 * discount);
    return totalPrice; 
}

test("Check total price", () => {
    expect(calculateTotal(100, 3)).toBe(300);
});

test("Check total price", () => {
    expect(calculateTotal(100, 3, 10)).toBe(270);
});

test("Check total price", () => {
    expect(calculateTotal(100, 3, 100)).toBe(null);
});

test("Check total price", () => {
    expect(calculateTotal(100, 0, 10)).toBe(270);
});

test("Check total price", () => {
    expect(calculateTotal(50, 2, 10)).toBe(90);
});

test("Check total price", () => {
    expect(calculateTotal(1, 1)).toBe(1);
});