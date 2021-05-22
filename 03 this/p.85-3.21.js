// call/apply 메서드의 활용 2) 생성자 내부에서 다른 생성자를 호출

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, school) {
  Person.call(this, name, gender); // Student를 this로 하고, 전달받은 name과 gender를 그대로 넘겨 반복을 줄인다.
  this.school = school;
}
function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
}
var by = new Student('보영', 'female', '단국대');
var jn = new Employee('재난', 'male', '구골');

console.log(by);
console.log(jn);

/*
by = Student { name: '보영', gender: 'female', school: '단국대' }
jn = Employee { name: '재난', gender: 'male', company: '구골' }
*/