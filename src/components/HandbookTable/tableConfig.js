// Конфигурации хендбуков
export const API_URI = "http://127.0.0.1:8000";

// Конфиг хендбука Кабинеты
const cabinetsConfig = {
  endpoint: "/cabinet/search/all",
  tableLabel: "Кабинеты",
  fields: {
    id: { label: "id", isId: true, isRequired: true },
    number: { label: "Номер кабинета", isId: false, isRequired: true },
    capacity: { label: "Вместимость", isId: false, isRequired: true },
    state: { label: "Состояние кабинета", isId: false, isRequired: false },
    buildingNumber: { label: "Номер корпуса", isId: false, isRequired: true },
  },
};

// Конфиг хендбука Преподавательские категории
const teacherCategoriesConfig = {
  endpoint: "/teacher-category/search/all",
  tableLabel: "Категории преподавателей",
  fields: {
    name: { label: "Название", isId: true, isRequired: true },
  },
};

// Конфиг хендбука Преподаватели
const teachersConfig = {
  endpoint: "/teacher/search/all",
  tableLabel: "Преподаватели",
  fields: {
    id: { label: "id", isId: true, isRequired: true },
    name: { label: "Имя", isId: false, isRequired: true },
    surname: { label: "Фамилия", isId: false, isRequired: true },
    lastname: { label: "Отчество", isId: false, isRequired: false },
    phoneNumber: { label: "Номер телефона", isId: false, isRequired: false },
    email: { label: "Email", isId: false, isRequired: false },
    teacherCategory: { label: "Категория преподавателя", isId: false, isRequired: false },
  },
};

// Конфиг хендбука Формы оплаты
const paymentFormsConfig = {
  endpoint: "/payment-form/search/all",
  tableLabel: "Формы оплаты",
  fields: {
    name: { label: "Название формы оплаты", isId: true, isRequired: true },
    isStateFunded: { label: "Бюджетная форма оплаты", isId: false, isRequired: true },
  },
};

// Конфиг хендбука Специальности
const specialtiesConfig = {
  endpoint: "/specialty/search/all",
  tableLabel: "Специальности",
  fields: {
    code: { label: "Код специальности", isId: true, isRequired: true },
    title: { label: "Название специальности", isId: false, isRequired: true },
  },
};

// Конфиг хендбука Корпуса
const buildingsConfig = {
  endpoint: "/building/search/all",
  tableLabel: "Корпуса",
  fields: {
    number: { label: "Номер корпуса", isId: true, isRequired: true },
    city: { label: "Город", isId: false, isRequired: false },
    address: { label: "Адрес", isId: false, isRequired: false },
    isActive: { label: "Активен ли корпус", isId: false, isRequired: false },
  },
};

// Конфиг хендбука Аттестации
const certificationsConfig = {
  endpoint: "/certification/search/all",
  tableLabel: "Формы аттестации",
  fields: {
    subjectId: { label: "ID дисциплины", isId: true, isRequired: true },
    credit: { label: "Зачёт", isId: false, isRequired: true },
    differentiatedCredit: { label: "Дифференцированный зачёт", isId: false, isRequired: true },
    courseProject: { label: "Курсовой проект", isId: false, isRequired: true },
    courseWork: { label: "Курсовая работа", isId: false, isRequired: true },
    controlWork: { label: "Контрольная работа", isId: false, isRequired: true },
    otherForm: { label: "Другие формы аттестации", isId: false, isRequired: true },
  },
};

// Конфиг хендбука Типы занятий
const classSessionTypesConfig = {
  endpoint: "/class-session-type/search/all",
  tableLabel: "Типы занятий",
  fields: {
    name: { label: "Название", isId: true, isRequired: true },
    isStream: { label: "Потоковое занятие", isId: false, isRequired: true },
  },
};

// Конфиг хендбука Группы
const groupsConfig = {
  endpoint: "/group/search/all",
  tableLabel: "Группы",
  fields: {
    name: { label: "Название группы", isId: true, isRequired: true },
    yearAdmission: { label: "Год поступления", isId: false, isRequired: true },
    countStudents: { label: "Количество студентов", isId: false, isRequired: true },
    groupAdvisorId: { label: "ID куратора", isId: false, isRequired: false },
    specialtyCode: { label: "Код специальности", isId: false, isRequired: true },
    paymentForm: { label: "Форма оплаты", isId: false, isRequired: true },
  },
};

// Конфиг хендбука Учебные планы
const plansConfig = {
  endpoint: "/plan/search/all",
  tableLabel: "Учебные планы",
  fields: {
    id: { label: "id", isId: true, isRequired: true },
    year: { label: "Год учебного плана", isId: false, isRequired: true },
    specialtyCode: { label: "Код специальности", isId: false, isRequired: true },
  },
};

// Конфиг хендбука Семестры
const semestersConfig = {
  endpoint: "/semester/search/all",
  tableLabel: "Семестры",
  fields: {
    id: { label: "id", isId: true, isRequired: true },
    semesterNumber: { label: "Номер семестра", isId: false, isRequired: true },
    weeks: { label: "Количество учебных недель в семестре", isId: false, isRequired: true },
    practiceWeeks: { label: "Количество недель практики в семестре", isId: false, isRequired: true },
    planId: { label: "ID учебного плана", isId: false, isRequired: true },
  },
};

// Все хендбуки
export const tableConfigs = {
  cabinets: cabinetsConfig,
  teacherCategories: teacherCategoriesConfig,
  teachers: teachersConfig,
  paymentForms: paymentFormsConfig,
  specialties: specialtiesConfig,
  buildings: buildingsConfig,
  certifications: certificationsConfig,
  classSessionTypes: classSessionTypesConfig,
  groups: groupsConfig,
  plans: plansConfig,
  semesters: semestersConfig,
};

/**
 * @typedef {Object} HandbookConfig
 * @property {string} tableLabel
 * @property {string} endpoint
 * @property {Record<string, { label: string, isId?: boolean }>} fields
 */

/** @returns {string[]} Список системных имён хендбуков */
export const getHandbookNames = () => Object.keys(tableConfigs);

/** @param {string} handbookName */
export const getHandbookLabel = (handbookName) => getTableConfig(handbookName).tableLabel;

/**
 * Возвращает конфиг хендбука по названию
 * @param {string} handbookName
 * @returns {HandbookConfig}
 */
export function getTableConfig(handbookName) {
  const config = tableConfigs[handbookName];
  if (!config) {
    throw new Error(
      `Неизвестный хендбук "${handbookName}". Доступные хендбуки: ${Object.keys(tableConfigs).join(", ")}`,
    );
  }
  return config;
}

/**
 * Возвращает все поля выбранного хендбука
 *  @param {string} handbookName
 */
export const getTableFields = (handbookName) => getTableConfig(handbookName).fields;

/**
 * Возвращает имя ID-поля хендбука (или null)
 * @param {string} handbookName
 */
export const getIdFieldName = (handbookName) => {
  const entry = Object.entries(getTableFields(handbookName)).find(([, field]) => field.isId);
  return entry?.[0] ?? null;
};

/**
 * Формирует колонки для TanStack Table
 * @param {string} handbookName
 */
export const getColumnDefs = (handbookName) =>
  Object.entries(getTableFields(handbookName)).map(([fieldName, field]) => ({
    accessorKey: fieldName,
    header: field.label,
  }));
