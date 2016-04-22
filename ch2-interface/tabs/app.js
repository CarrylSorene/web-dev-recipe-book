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

function createTab($container, $content, childSelector) {
  var tabTitle, $newTab;
  tabTitle = $content.data('tab-title');
  $newTab = $('<li>').addClass('tab').html(tabTitle);
  $newTab.on('click', function() {
    switchTab($container, $(this), $content, childSelector);
  });
  return $newTab;
}

//first hide everything, then show selected tab
function switchTab($container, $tab, $content, childSelector) {
$container.find('childSelector').hide();
$container.find('ul.tabs > li').removeClass('selected');

$content.slideDown('fast');
$tab.addClass('selected');
}