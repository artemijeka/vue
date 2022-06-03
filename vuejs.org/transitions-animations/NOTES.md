??? type со значением animation или transition ???

??? <transition :duration="1000">...</transition>

??? <transition :duration="{ enter: 500, leave: 800 }">...</transition>

Если необходимо применить анимацию перехода при первоначальной отрисовке элемента, то её можно добавить с помощью атрибута appear: <transition appear>
