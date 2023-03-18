import { set } from './helpers';
import { EventBus } from './EventBus';
import Block from './Block';

export enum StoreEvents {
	Updated = 'updated'
}
// Класс Store используется для хранения данных в _state свойстве типа any.
export class Store extends EventBus {
	// объекс state, при изменение состояния становится новым объектом
	private _state: any = {};

	// метод set принимает строку и данные и эти данные записывает в состояние, используя строку как тип path
	// позволяет установить значение в хранилище по определенному ключевому пути.
	set(keypath: string, data: unknown) {
		set(this._state, keypath, data);

		this.emit(StoreEvents.Updated, this.getState());
	}

	// метод, который возвращает состояние
	public getState() {
		return this._state;
	}
}

const store = new Store();

// Функция withStore принимает mapStateToProps функцию в качестве аргумента и возвращает компонент более высокого порядка (HOC), который является оболочкой компонента.
export function withStore(mapStateToProps: (state: any) => any) {
	// обертка для компонента
	return function wrap(Component: typeof Block) {
		return class WithStore extends Component {
			constructor(props: any) {
				// Функция mapStateToProps принимает текущее состояние хранилища в качестве аргумента и возвращает объект, представляющий свойства, которые должны быть переданы обернутому компоненту.
				// HOC подписывается на StoreEvents.Updated событие, которое генерируется всякий раз, когда изменяется состояние хранилища.
				// Когда событие генерируется, HOC обновляет свойства упакованного компонента с новым состоянием хранилища.
				let previousState = mapStateToProps(store.getState()); // текущее состояние хранилища

				super({ ...props, ...previousState }); // вызов родительского конструктора

				store.on(StoreEvents.Updated, () => {
					const stateProps = mapStateToProps(store.getState());

					previousState = stateProps;

					this.setProps({ ...stateProps });
				});
			}
		};
	};
}

export default store;
