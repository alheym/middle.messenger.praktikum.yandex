export type Indexed<T = any> = {
	[key in string]: T;
};

// объединение объектов
export function merge(lhs: Indexed, rhs: Indexed): Indexed {
	// Если свойство p не принадлежит rhs, итерация продолжается до следующего свойства.
	for (const p in rhs) {
		if (!rhs.hasOwnProperty(p)) {
			continue;
		}

		try {
			// Если свойство rhs[p] является объектом, функция рекурсивно вызывает себя с аргументами lhs[p] и rhs[p] в качестве аргументов.
			// Затем результат рекурсивного вызова присваивается обратно rhs[p].
			if (rhs[p].constructor === Object) {
				rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
			} else {
				// Если свойство rhs[p] не является объектом, его значение просто присваивается lhs[p].
				lhs[p] = rhs[p];
			}
		} catch (e) {
			// Если при проверке конструктора свойства pвозникает ошибка, она перехватывается и значение rhs[p]присваивается lhs[p].
			lhs[p] = rhs[p];
		}
	}
	// возвращает объединенный словарь lhs
	return lhs;
}

// метод добавит значение даже по несуществующему пути
export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
	if (typeof object !== 'object' || object === null) {
		return object;
	}

	if (typeof path !== 'string') {
		throw new Error('path must be string');
	}

	const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
		[key]: acc,
	}), value as any);

	return merge(object as Indexed, result);
}

function isPlainObject(value: unknown): value is Indexed {
	return typeof value === 'object'
		&& value !== null
		&& value.constructor === Object
		&& Object.prototype.toString.call(value) === '[object Object]';
}

function isArray(value: unknown): value is [] {
	return Array.isArray(value);
}

function isFunction(value: unknown): value is Function {
	return typeof value === 'function';
}

function isArrayOrObject(value: unknown): value is ([] | Indexed) {
	return isPlainObject(value) || isArray(value);
}

export function isEqual(lhs: Indexed, rhs: Indexed) {
	if (!lhs && !rhs) {
		return true;
	}

	if (!lhs || !rhs) {
		return false;
	}

	if (Object.keys(lhs).length !== Object.keys(rhs).length) {
		return false;
	}

	for (const [key, value] of Object.entries(lhs)) {
		if (!rhs.hasOwnProperty(key)) {
			return false;
		}

		const rightValue = rhs[key];

		if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
			if (isPlainObject(value) && isPlainObject(rightValue)) {
				if (isEqual(value, rightValue)) {
					continue;
				}

				return false;
			} if (isArray(value) && isArray(rightValue)) {
				if (isEqual(value as unknown as Indexed, rightValue as unknown as Indexed)) {
					continue;
				}

				return false;
			}

			return false;
		}

		if (isFunction(value) && isFunction(rightValue)) {
			if (value.toString() === rightValue.toString()) {
				continue;
			}

			return false;
		}

		if (value !== rightValue) {
			if (Number.isNaN(value) && Number.isNaN(rightValue)) {
				continue;
			}

			return false;
		}
	}

	return true;
}
