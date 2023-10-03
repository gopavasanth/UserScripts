var parentElement = 'talentPipeline';
var tabbedInterface = document.createElement('div');
tabbedInterface.className = 'container mt-4';

var tabbedHeading = document.createElement('p');
// tabbedHeading.textContent = 'Expected Team Metrics with New Hire';
// tabbedInterface.appendChild(tabbedHeading);

var tabNav = document.createElement('ul');
tabNav.className = 'nav nav-tabs';
tabbedInterface.appendChild(tabNav);

var tabs = [
  {
    key: 'info',
    text: '+21% Female',
    icon: 'mdi mdi-chart-bar',
    number: '21'
  },
  {
    key: 'teamSize',
    text: 'Team: 24 Members',
    icon: 'mdi mdi-account-group',
    number: '24'
  },
  {
    key: 'averageAge',
    text: 'Avg. Age: 30',
    icon: 'mdi mdi-calendar',
    number: '30'
  },
  {
    key: 'diversityIndex',
    text: 'Diversity Index: 0.78',
    icon: 'mdi mdi-certificate',
    number: '0.78'
  }
];

tabs.forEach(function (tabInfo, index) {
  var tabNavItem = document.createElement('li');
  tabNavItem.className = 'nav-item';

  var tabNavLink = document.createElement('a');
  tabNavLink.className = 'nav-link';

  var avatar = document.createElement('div');
  avatar.className = 'circular-avatar';
  avatar.textContent = tabInfo.number;

  var iconTextContainer = document.createElement('div');
  iconTextContainer.className = 'icon-text-container';

  var flexContainer = document.createElement('div');
  flexContainer.className = 'd-flex flex-column align-items-center justify-content-center';

  var mdiIcon = document.createElement('i');
  mdiIcon.className = `${tabInfo.icon} mdi mdi-24px`;

  var textElement = document.createElement('p');
  textElement.textContent = tabInfo.text;

  iconTextContainer.appendChild(mdiIcon);
  iconTextContainer.appendChild(textElement);

  flexContainer.appendChild(avatar);
  flexContainer.appendChild(iconTextContainer);

  tabNavLink.appendChild(flexContainer);

  tabNavLink.href = `#tab${index}`;
  tabNavLink.setAttribute('data-toggle', 'tab');

  tabNavItem.appendChild(tabNavLink);
  tabNav.appendChild(tabNavItem);

  var tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  tabbedInterface.appendChild(tabContent);

  var tabPane = document.createElement('div');
  tabPane.className = 'tab-pane fade';
  tabPane.id = `tab${index}`;

  var tabText = document.createElement('p');
  tabText.textContent = tabInfo.text;

  tabPane.appendChild(tabText);
  tabContent.appendChild(tabPane);
});

var elementWithGlobalPageTitle = document.getElementById(parentElement);

if (elementWithGlobalPageTitle) {
  elementWithGlobalPageTitle.parentNode.insertBefore(tabbedInterface, elementWithGlobalPageTitle);
} else {
  console.log('Element with id "QUICK_ACTIONS-sectionLabel" not found.');
}

var bootstrapCssLink = document.createElement('link');
bootstrapCssLink.rel = 'stylesheet';
bootstrapCssLink.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';

var bootstrapJsScript = document.createElement('script');
bootstrapJsScript.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';

document.head.appendChild(bootstrapCssLink);
document.head.appendChild(bootstrapJsScript);

var mdiCssLink = document.createElement('link');
mdiCssLink.rel = 'stylesheet';
mdiCssLink.href = 'https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css';

document.head.appendChild(mdiCssLink);

var customCss = document.createElement('style');
customCss.textContent = `
  .circular-avatar {
    width: 50px;
    height: 50px;
    background-color: #007bff;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-bottom: 8px;
  }
  .icon-text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

document.head.appendChild(customCss);

var splitLayoutContainer = document.createElement('div');
splitLayoutContainer.className = 'container mt-4';

var elementWithGlobalPageTitleRight = document.getElementById(parentElement);

if (elementWithGlobalPageTitleRight) {
  elementWithGlobalPageTitleRight.parentNode.insertBefore(splitLayoutContainer, elementWithGlobalPageTitleRight);
} else {
  console.log('Element with id "QUICK_ACTIONS-sectionLabel" not found.');
}
