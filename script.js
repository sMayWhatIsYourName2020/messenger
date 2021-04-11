var messageTemplate = document.querySelector('#message-template').content;
var newItemTemplate = messageTemplate.querySelector('.chat-message'); 
var list = document.querySelector('.chat-content');
var items = list.children;
var newItemForm = document.querySelector('.chat-form');
var newItemTitle = document.querySelector('.chat-form-input');


newItemForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  var messageText = newItemTitle.value;
  var message = newItemTemplate.cloneNode(true);
  message.children[1].textContent = messageText;
  list.appendChild(message);
  
  deleteMessage(message);
  newItemTitle.value = '';
});

var deleteMessage = function (message) {
  var buttonDelete = message.querySelector('.chat-message-button');
  buttonDelete.addEventListener('click', function() {
    message.remove();
  });
};

for (var i = 0; i < items.length; i++) {
  deleteMessage(items[i]);
}
