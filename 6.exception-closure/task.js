function parseCount(count) {
	const num = Number.parseFloat(count, 10)
	if (Number.isNaN(num)) {
		throw new Error('Невалидное значение')
	} else {
		return num
	}
}

function validateCount(count) {
	try {
		return parseCount(count)
	} catch (error) {
		return error
	}
}

class Triangle {
	constructor(a, b, c) {
		this.sideA = a
		this.sideB = b
		this.sideC = c
		if (
			this.sideA + this.sideB < this.sideC ||
			this.sideB + this.sideC < this.sideA ||
			this.sideA + this.sideC < this.sideB
		) {
			throw new Error('Треугольник с такими сторонами не существует')
		}
	}

	get perimeter() {
		return this.sideA + this.sideB + this.sideC
	}

	get area() {
		const p = this.perimeter / 2
		const area = Math.sqrt(
			p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
		)
		return +area.toFixed(3)
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (e) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует'
			},
			get area() {
				return 'Ошибка! Треугольник не существует'
			}
		}
	}
}
