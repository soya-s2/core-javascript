var count = 0; // count�� 0���� �ʱ�ȭ
var timer = setInterval(function () { // timer�� setInterval�Լ��� ������ ����� �Ҵ�. ù �Ű������� �͸��Լ��̰� �ι�° �Ű������� 300�̶�� ������.
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);
// �� setInterval(func, delay)�ϸ� �� delay ms���� func�� ������
// timer���� clearInterval�� �ϱ� ���� ������ ID�� ���