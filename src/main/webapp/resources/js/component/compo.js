var compo = compo || {};
compo = {
	cust_login_form : ()=>{
		return '<h2>Login Form</h2>'
		+'<form action="/action_page.php">'
		+'	<div class="imgcontainer">'
		+'		<img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></br></br>'
		+'	</div>'
		+'	<div class="container">'
		+'		<label for="uname"><b>Username</b></label> </br>'
		+'		<input type="text" placeholder="Enter Username" name="uname" required></br>'
		+'		<label for="psw"><b>Password</b></label></br>'
		+'		<input type="password" placeholder="Enter Password" name="psw" required></br>'
		+'		<button type="submit">Login</button>'
		+'		<label>'
		+'			<input type="checkbox" checked="checked" name="remember"> Remember me'
		+'		</label>'
		+'	</div>'
		+'	<div class="container" style="background-color:#f1f1f1">'
		+'		<button type="button" class="cancelbtn">Cancel</button>'
		+'		<span class="psw">Forgot <a href="#">password?</a></span>'
		+'	</div>'
		+'</form>'
	},
	cust_join_form : ()=>{
		return '<form action="/action_page.php" style="border:1px solid #ccc">'
		  +'	<div class="container">'
		  +'		<h1>Sign Up</h1>'
		  +'		<p>Please fill in this form to create an account.</p>'
		  +'	<hr>'
		  +'		<label for="email"><b>Email</b></label>'
		  +'		<input type="text" placeholder="Enter Email" name="email" required>'
		  +'		<label for="psw"><b>Password</b></label>'
		  +'		<input type="password" placeholder="Enter Password" name="psw" required'>
		  +'		<label for="psw-repeat"><b>Repeat Password</b></label>'
		  +' 		<input type="password" placeholder="Repeat Password" name="psw-repeat" required>'
		  +'		<label>'
		  +'	    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
		  +'		</label>'
		  +'  <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
		  +'	<div class="clearfix">'
		  +'<button type="button" class="cancelbtn">Cancel</button>'
		  +'<button type="submit" class="signupbtn">Sign Up</button>'
		  +'</div>'
		  +'</div>'
		  +'</form>'
	},
	emp_access_form : ()=>{
		return '<h2>Login Form</h2>'
			+'<form action="/action_page.php">'
			+'	<div class="imgcontainer">'
			+'		<img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></br></br>'
			+'	</div>'
			+'	<div class="container">'
			+'		<label for="uname"><b>Username</b></label> </br>'
			+'		<input type="text" placeholder="Enter Username" name="uname" required></br>'
			+'		<label for="psw"><b>Password</b></label></br>'
			+'		<input type="password" placeholder="Enter Password" name="psw" required></br>'
			+'		<button type="submit">Login</button>'
			+'		<label>'
			+'			<input type="checkbox" checked="checked" name="remember"> Remember me'
			+'		</label>'
			+'	</div>'
			+'	<div class="container" style="background-color:#f1f1f1">'
			+'		<button type="button" class="cancelbtn">Cancel</button>'
			+'		<span class="psw">Forgot <a href="#">password?</a></span>'
			+'	</div>'
			+'</form>'
	},
	emp_register_form : ()=>{
		return '<form action="/action_page.php" style="border:1px solid #ccc">'
		  +'	<div class="container">'
		  +'		<h1>Sign Up</h1>'
		  +'		<p>Please fill in this form to create an account.</p>'
		  +'	<hr>'
		  +'		<label for="email"><b>Email</b></label>'
		  +'		<input type="text" placeholder="Enter Email" name="email" required>'
		  +'		<label for="psw"><b>Password</b></label>'
		  +'		<input type="password" placeholder="Enter Password" name="psw" required'>
		  +'		<label for="psw-repeat"><b>Repeat Password</b></label>'
		  +' 		<input type="password" placeholder="Repeat Password" name="psw-repeat" required>'
		  +'		<label>'
		  +'	    <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
		  +'		</label>'
		  +'  <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
		  +'	<div class="clearfix">'
		  +'		<button type="button" class="cancelbtn">Cancel</button>'
		  +'		<button type="submit" class="signupbtn">Sign Up</button>'
		  +'	</div>'
		  +'	</div>'
		  +'</form>'
	},
	navi: ()=>{
				$('#nav').children().eq(0)
				.html('<a href="#" id="login_btn">로그인</a>');
				$('#nav').children().eq(1)
				.html('<a href="#" id="join_btn">회원가입</a>');
				$('#nav').children().eq(2)
				.html('<a href="#" id="register_btn">사원등록</a>');
				$('#nav').children().eq(3)
				.html('<a href="#" id="access_btn">사원접속</a>');
	}
}
