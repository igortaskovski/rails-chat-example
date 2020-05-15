import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('.chat-box').append('<li class="chat-left"><div class="chat-avatar"><img src="https://www.bootdey.com/img/Content/avatar/avatar3.png"></div><div class="chat-text">' + data.content + '</div></li>')
  }
});

$(document).on('turbolinks:load', () => {
  clear_input_field()
})

let clear_input_field = function() {
  $('#message_content').on('keydown', function(event) {
    if (event.keyCode === 13) {
      $('input').click()
      event.target.value = ''
      event.preventDefault()
    }
  })
} 