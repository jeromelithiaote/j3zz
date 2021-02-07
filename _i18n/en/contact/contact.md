<form id="my-form" action="https://formspree.io/f/mwkwzakv" method="POST">
  <label>Email:</label>
  <input type="email" name="email" />
  <label>Message:</label>
  <input type="text" name="message" />
  <button id="my-form-button">Submit</button>
  <p id="my-form-status"></p>
</form>

<hr />

<form action="https://formspree.io/{{ site.email }}" method="POST">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" name="name" id="name" />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="text" class="form-control" name="_replyto" id="email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea name="message" class="form-control" id="message" rows="12"></textarea>
  </div>
  <input type="submit" value="Send Message" class="btn btn-default btn-lg" />
  <input type="reset" value="Clear" class="btn btn-default btn-lg"/>

</form>
