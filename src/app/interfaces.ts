export interface Grade {
    _id: string,
    name: String,
    description: String,
    isActive: Boolean,
    displayOrder: Number
}

export interface Question {
    _id: string,
    questionText: String,
    timer: Number,
    imgUrl: String,
    displayOrder: Number,
    columnsCount: Number,
    isActive: Boolean,
    questionType: QuestionType,
    quiz: Quiz,
    subject: Subject,
    chapter: Chapter,
    answers: [Answer]
}


export interface Answer {
    _id: string,
    answerText: String,
    isCorrect: Boolean,
    imgUrl: String,
    displayOrder: Number
}


export interface QuestionType {
    _id: string,
    name: String,
    isActive: Boolean,
    description: String,
    displayOrder: Number
}

export interface Quiz {
    _id: string,
    name: String,
    description: String,
    isActive: Boolean,
    displayOrder: Number,
    chapter: Chapter
}

export interface Subject {
    _id: string,
    name: String,
    description: String,
    isActive: Boolean,
    displayOrder: Number,
    grade: Grade
}

export interface Chapter {
    name: String,
    description: String,
    isActive: Boolean,
    displayOrder: Number,
    subject: String
}