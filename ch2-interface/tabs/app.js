//$container argument is jQ object that should contain the tabs, 2nd is selector the fn will use to find each element that will be a tab
//create new ul, find each matching child and pass to ul
function createTabs($container, childSelector) {
  var $list = $('<ul>').addClass('tabs');
  $container.find(childSelector).each(function() {
    var $newTab = createTab($container, $(this), childSelector);
    $list.append($newTab);
  });
  $container.prepend($list);
}

