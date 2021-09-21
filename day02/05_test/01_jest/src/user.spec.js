// 为了程序的可测试性，需要组织自己的代码
const User = require('./user');

test('should getName ', () => {
  // given
  const user = new User("xiannai");

  // when
  user.setName('bugu');

  // then
  expect(user.getName()).toBe('bugu');
})