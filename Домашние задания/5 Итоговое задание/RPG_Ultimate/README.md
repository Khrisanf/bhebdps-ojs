# Документация проекта RPG Ultimate

## Введение
**RPG Ultimate** — это обучающий проект для изучения основ объектно-ориентированного программирования (ООП) и разработки игровых механик в стиле RPG. Цель проекта — создать систему персонажей, их взаимодействий и боевых механик на игровом поле.

---

## Архитектура проекта

### Основные компоненты
1. **Классы персонажей**:
   - Базовые классы (`Player`, `Warrior`, `Archer`, `Mage`).
   - Улучшенные классы (`Dwarf`, `Crossbowman`, `Demiurge`).
2. **Оружие**:
   - Базовые классы оружия (`Weapon`, `Arm`, `Bow`, `Sword`, `Knife`, `Staff`).
   - Усиленные классы оружия (`LongBow`, `Axe`, `StormStaff`).
3. **Игровая логика**:
   - Механики передвижения, атак, защиты и выбора противника.
   - Алгоритмы расчёта урона, блокирования и уворота.
4. **Игровое поле**:
   - Реализация пошагового игрового процесса и взаимодействий между персонажами.

---

## Подробности реализации

### 1. Персонажи
#### Базовый класс: `Player`
- **Свойства:**
  - `life` — здоровье (по умолчанию 100).
  - `magic` — мана (по умолчанию 20).
  - `speed` — скорость передвижения.
  - `attack` — сила атаки.
  - `agility` — ловкость.
  - `luck` — удача.
  - `description` — описание класса.
  - `weapon` — текущее оружие (по умолчанию `Arm`).
  - `position` — текущая позиция на игровом поле.
  - `name` — имя персонажа.

- **Методы:**
  - `getLuck()` — рассчитывает коэффициент удачливости.
  - `getDamage(distance)` — рассчитывает урон с учётом расстояния.
  - `takeDamage(damage)` — уменьшает здоровье персонажа в зависимости от полученного урона.
  - `isDead()` — проверяет, жив ли персонаж.
  - `moveLeft(distance)` / `moveRight(distance)` — изменяет позицию на игровом поле.
  - `isAttackBlocked()` — проверяет успешность блока удара.
  - `dodged()` — проверяет успешность уклонения.

#### Особенности улучшенных классов
- **`Warrior`**: При низком здоровье урон может поглощаться за счёт маны.
- **`Mage`**: Получает меньше урона при достаточном уровне маны.
- **`Dwarf`**: Каждый шестой удар получает меньше урона.
- **`Demiurge`**: Наносит увеличенный урон при высоком уровне маны.

---

### 2. Оружие
#### Базовый класс: `Weapon`
- **Свойства:**
  - `name` — название оружия.
  - `attack` — сила атаки оружия.
  - `durability` — прочность оружия.
  - `range` — дальность действия оружия.

- **Методы:**
  - `takeDamage(damage)` — уменьшает прочность оружия.
  - `getDamage()` — рассчитывает урон оружия в зависимости от прочности.
  - `isBroken()` — проверяет, сломано ли оружие.

#### Таблица оружия
| Класс      | Название      | Урон | Прочность  | Дальность |
|------------|---------------|------|------------|-----------|
| `Arm`      | Рука          | 1    | ∞       | 1         |
| `Bow`      | Лук           | 10   | 200        | 3         |
| `Sword`    | Меч           | 25   | 500        | 1         |
| `Knife`    | Нож           | 5    | 300        | 1         |
| `Staff`    | Посох         | 8    | 300        | 2         |

---

### 3. Игровая логика
- **Атака**:
  - Если оружие достаёт до цели, урон рассчитывается с учётом удачи и расстояния.
  - Урон может быть заблокирован или уклонён.
- **Передвижение**:
  - Игроки могут двигаться влево или вправо в пределах их скорости.
- **Выбор врага**:
  - Игрок выбирает врага с минимальным здоровьем на поле.

---

### 4. Игровое поле
- Поле представляет собой одномерную шкалу позиций, где игроки могут двигаться и атаковать друг друга.
- Каждая атака или движение происходит поочерёдно в зависимости от хода игрока.

---

## Тестирование

Проект использует **Jest** для тестирования основных классов и методов.

### Покрытие тестами
- Все методы классов персонажей и оружия покрыты тестами.
- Для выполнения тестов:
  ```bash
  npm test
  ```

---

## Запуск проекта

### Установка зависимостей
```bash
npm install
```

### Запуск игры
```bash
npm start
```

---

## Заключение

**RPG Ultimate** — это отличная площадка для изучения программирования и разработки игровых механик. Проект предоставляет возможность экспериментировать с ООП, алгоритмами и тестированием.

