var compo = compo || {};
compo = {
	cust_login_form : ()=>{
		return '<h2>Login Form</h2>'
		+'<form>'
		+'	<div class="imgcontainer">'
		+'		<img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></br></br>'
		+'	</div>'
		+'	<div class="container">'
		+'		<label for="uname"><b>Username</b></label> </br>'
		+'		<input type="text" placeholder="Enter Username" name="uname" value = "boo"></br>'
		+'		<label for="psw"><b>Password</b></label></br>'
		+'		<input type="password" placeholder="Enter Password" name="psw" value = "123"></br>'
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
	cust_form : ()=>{
		return '<form style="border:1px solid #ccc">'
        +'  <div class="container">'
        +'    <h1>Register Form</h1>'
        +'    <p>Please fill in this form to create an account.</p>'
        +'    <hr>'
        +'    <label for="email"><b>ID</b></label></br>'
        +'    <input type="text" placeholder="Enter ID" name="uid" "required"></br>'
        +'	  <label for="email"><b>customerName</b></label></br>'
        +'    <input type="password" placeholder="Repeat customerName" name="customerName" "required"></br>'
        +'    <label for="psw"><b>Password</b></label></br>'
        +'    <input type="password" placeholder="Enter Password" name="psw" "required"></br>'
        +'    <label for="psw"><b>SSN</b></label></br>'
        +'    <input type="password" placeholder="Repeat SSN" name="ssn" "required"></br>'
        +'	  <label for="email"><b>phone</b></label></br>'
        +'    <input type="password" placeholder="Repeat phone" name="phone" "required"></br>'
        +'	  <label for="email"><b>city</b></label></br>'
        +'    <input type="password" placeholder="Repeat city" name="city" "required"></br>'
        +'	  <label for="email"><b>address</b></label></br>'
        +'    <input type="password" placeholder="Repeat address" name="address" "required"></br>'
        +'	  <label for="email"><b>postalCode</b></label></br>'
        +'    <input type="password" placeholder="Repeat phone" name="postalCode" "required"></br>'
        +'    <label>'
        +'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
        +'    </label>'
        +'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
        +'    <div class="clearfix">'
        +'      <button type="button" class="cancelbtn">Cancel</button>'
        +'      <button type="submit" class="signupbtn">Sign Up</button>'
        +'    </div>'
        +'  </div>'
        +'</form>'
	},
	cust_delete_form : ()=>{
		return '<h2>delete Form</h2>'
		+'<form>'
		+'	<div class="imgcontainer">'
		+'		<img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></br></br>'
		+'	</div>'
		+'	<div class="container">'
		+'		<label for="uname"><b>ID</b></label> </br>'
		+'		<input type="text" placeholder="Enter id" name="customerID"></br>'
		+'		<label for="psw"><b>Password</b></label></br>'
		+'		<input type="password" placeholder="Enter Password" name="password"></br>'
		+'		<button type="submit">회원탈퇴</button>'
		+'	</div>'
		+'	<div class="container" style="background-color:#f1f1f1">'
		+'		<button type="button" class="cancelbtn">Cancel</button>'
		+'		<span class="psw">Forgot <a href="#">password?</a></span>'
		+'	</div>'
		+'</form>'
	},
	emp_access_form : ()=>{
		return '<h2>EMP_Login Form</h2>'
			+'<form action="/action_page.php">'
			+'	<div class="imgcontainer">'
			+'		<img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></br></br>'
			+'	</div>'
			+'	<div id="namelabel" class="container">'
		/*	+'		<label for="id"><b>EMPLOYEEID</b></label> </br>'
			+'		<input type="text" placeholder="Enter employeeId" name="employeeId" value = "1000" required></br>'
			+'		<label for="name"><b>name</b></label></br>'
			+'		<input type="text" placeholder="Enter name" name="name" value="박효신" required></br>'*/
			+'		<button type="submit" id="access_btn">ACCESS</button>'
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
        return '<form style="border:1px solid #ccc">'
        +'  <div class="container">'
        +'    <h1>Register Form</h1>'
        +'    <p>Please fill in this form to create an account.</p>'
        +'    <hr>'
        +'    <label for="email"><b>EMPLOYEEId</b></label></br>'
        +'    <input type="text" placeholder="Enter Id" name="employeeId" "required"></br>'
        +'    <label for="name"><b>NAME</b></label></br>'
        +'    <input type="text" placeholder="Repeat Name" name="name" "required"></br>'
        +'    <label for="email"><b>MANAGER</b></label></br>'
        +'    <input type="text" placeholder="Enter Manager" name="manager" "required"></br>'
        +'    <label for="name"><b>BIRTHDATE</b></label></br>'
        +'    <input type="text" placeholder="Repeat BirthDate" name="birthDate" "required"></br>'
        +'    <label for="name"><b>PHOTO</b></label></br>'
        +'    <input type="text" placeholder="Repeat Photo" name="photo" "required"></br>'
        +'    <label for="name"><b>NOTES</b></label></br>'
        +'    <input type="text" placeholder="Repeat Notes" name="notes" "required"></br>'
        +'    <label>'
        +'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
        +'    </label>'
        +'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
        +'    <div class="clearfix">'
        +'      <button type="button" class="cancelbtn">Cancel</button>'
        +'      <button type="submit" class="signupbtn">REGISTER</button>'
        +'    </div>'
        +'  </div>'
        +'</form>'
	},
	cust_mypage : ()=>{
		return '<div class="w3-light-grey">'
        +'<!-- Page Container -->'
        +'<div class="w3-content w3-margin-top" style="max-width:1400px;">'
          +'<!-- The Grid -->'
          +'<div class="w3-row-padding">'
            +'<!-- Left Column -->'
            +'<div class="w3-third">'
              +'<div class="w3-white w3-text-grey w3-card-4">'
                +'<div class="w3-display-container">'
                  +'<img src="/w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">'
                  +'<div class="w3-display-bottomleft w3-container w3-text-black">'
                    +'<h2>Jane Doe</h2>'
                  +'</div>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>'
                  +'<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>'
                  +'<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>'
                  +'<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>'
                  +'<hr>'
                  +'<p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>'
                  +'<p>Adobe Photoshop</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>'
                  +'</div>'
                  +'<p>Photography</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">'
                      +'<div class="w3-center w3-text-white">80%</div>'
                    +'</div>'
                  +'</div>'
                  +'<p>Illustrator</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>'
                  +'</div>'
                  +'<p>Media</p>'
                  +'<div class="w3-light-grey w3-round-xlarge w3-small">'
                    +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>'
                  +'</div>'
                  +'<br>'
                  +'<p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>"Languages"</b></p>'
                  +'<p>English</p>'
                  +'<div class="w3-light-grey w3-round-xlarge">'
                    +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>'
                  +'</div>'
                  +'<p>Spanish</p>'
                  +'<div class="w3-light-grey w3-round-xlarge">'
                    +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>'
                  +'</div>'
                  +'<p>German</p>'
                  +'<div class="w3-light-grey w3-round-xlarge">'
                    +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>'
                  +'</div>'
                  +'<br>'
                +'</div>'
              +'</div><br>'
            +'<!-- End Left Column -->'
            +'</div>'
            +'<!-- Right Column -->'
            +'<div class="w3-twothird">'
              +'<div class="w3-container w3-card w3-white w3-margin-bottom">'
              +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>'
                  +' <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>'
                  +'  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>'
                  +' <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>'
                  +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>'
                +'</div>'
              +'</div>'
              +'<div class="w3-container w3-card w3-white">'
              +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>W3Schools.com</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>'
                  +'<p>Web Development! All I need to know in one place</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>London Business School</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>'
                  +'<p>Master Degree</p>'
                  +'<hr>'
                +'</div>'
                +'<div class="w3-container">'
                  +'<h5 class="w3-opacity"><b>School of Coding</b></h5>'
                  +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>'
                  +'<p>Bachelor Degree</p><br>'
                +'</div>'
              +'</div>'
            +'<!-- End Right Column -->'
            +'</div>'
          +'<!-- End Grid -->'
          +'</div>'
          +'<!-- End Page Container -->'
        +'</div>'
        +'<footer class="w3-container w3-teal w3-center w3-margin-top">'
          +'<p>Find me on social media.</p>'
          +'<i class="fa fa-facebook-official w3-hover-opacity"></i>'
          +'<i class="fa fa-instagram w3-hover-opacity"></i>'
          +'<i class="fa fa-snapchat w3-hover-opacity"></i>'
          +'<i class="fa fa-pinterest-p w3-hover-opacity"></i>'
          +'<i class="fa fa-twitter w3-hover-opacity"></i>'
          +'<i class="fa fa-linkedin w3-hover-opacity"></i>'
          +'<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>'
        +'</footer>'
        +'</div>'
	},
	carousel : ()=>{
		return '<div class="container">'
		+'  <h2>Carousel Example</h2>'
		+'  <div id="myCarousel" class="carousel slide" data-ride="carousel">'
		+'    <!-- Indicators -->'
		+'    <ol class="carousel-indicators">'
		+'      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
		+'      <li data-target="#myCarousel" data-slide-to="1"></li>'
		+'      <li data-target="#myCarousel" data-slide-to="2"></li>'
		+'    </ol>'
		+'    <!-- Wrapper for slides -->'
		+'    <div class="carousel-inner">'
		+'      <div class="item active">'
		+'        <img src="https://www.w3schools.com/bootstrap/la.jpg" alt="Los Angeles" style="width:100%;">'
		+'        <div class="carousel-caption">'
		+'          <h3>Los Angeles</h3>'
		+'          <p>LA is always so much fun!</p>'
		+'        </div>'
		+'      </div>'
		+'      <div class="item">'
		+'        <img src="https://www.w3schools.com/bootstrap/chicago.jpg" alt="Chicago" style="width:100%;">'
		+'        <div class="carousel-caption">'
		+'          <h3>Chicago</h3>'
		+'          <p>Thank you, Chicago!</p>'
		+'        </div>'
		+'      </div>'
		+'      <div class="item">'
		+'        <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="New York" style="width:100%;">'
		+'        <div class="carousel-caption">'
		+'          <h3>New York</h3>'
		+'          <p>We love the Big Apple!</p>'
		+'        </div>'
		+'      </div>'
		+'    </div>'
		+'    <!-- Left and right controls -->'
		+'    <a class="left carousel-control" href="#myCarousel" data-slide="prev">'
		+'      <span class="glyphicon glyphicon-chevron-left"></span>'
		+'      <span class="sr-only">Previous</span>'
		+'    </a>'
		+'    <a class="right carousel-control" href="#myCarousel" data-slide="next">'
		+'      <span class="glyphicon glyphicon-chevron-right"></span>'
		+'      <span class="sr-only">Next</span>'
		+'    </a>'
		+'  </div>'
		+'</div>'
	},
	prd_post : ()=>{
		return '<div class="container">'
        +'<div class="form-group">'
        +'  <label for="productName">상품명:</label>'
        +'    <input type="text" class="form-control" id="productName" name="productName">'
        +'  <label for="price">가격:</label>'
        +'  <input type="text" class="form-control" id="price" name="price">'
        +'</div>'
        +'<div class="form-group">'
        +'  <label for="pwd">Password:</label>'
        +'  <input type="password" class="form-control" id="pwd">'
        +'</div>'
        +'<h3> 색상 </h3>'
        +'<div class="checkbox">'
        +'  <label><input type="checkbox" value="">블랙</label>'
        +'</div>'
        +'<div class="checkbox">'
        +'  <label><input type="checkbox" value="">화이트</label>'
        +'</div>'
        +'<div class="checkbox disabled">'
        +'  <label><input type="checkbox" value="" disabled>블루</label>'
        +'</div>'
        +'<div class="radio">'
        +'  <label><input type="radio" name="supplierId" checked>삼성전자</label>'
        +'</div>'
        +'<div class="radio">'
        +'  <label><input type="radio" name="optradio">Option 2</label>'
        +'</div>'
        +'<div class="radio disabled">'
        +'  <label><input type="radio" name="optradio" disabled>Option 3</label>'
        +'</div>'
        +'<div class="form-group">'
        +'  <label for="sel1">카테고리:</label>'
        +'  <select class="form-control" id="sel1">'
        +'    <option>1</option>'
        +'    <option>2</option>'
        +'    <option>3</option>'
        +'    <option>4</option>'
        +'  </select>'
        +'</div>'
        +'<p>생산년월일: <input type="text" id="datepicker"></p>'
        +'<div class="form-group">'
        +'  <label for="unit">상세설명:</label>'
        +'  <textarea class="form-control" rows="5" id="unit"></textarea>'
        +'</div>'
	},
	prod_register : ()=>{
		return '<div class="col-md-8 order-md-1">'
        +'<h4 class="mb-3">상품 등록</h4>'
        +'<form class="needs-validation" novalidate="">'
          +'<div class="row">'
            +'<div class="col-md-6 mb-3">'
              +'<label for="firstName">카테고리</label>'
              +'<input type="text" class="form-control" id="firstName" placeholder="" value="스마트폰" required="">'
              +'<div class="invalid-feedback">'
              +'</div>'
            +'</div>'
            +'<div class="col-md-6 mb-3">'
              +'<label for="lastName">상품명</label>'
              +'<input type="text" class="form-control" id="lastName" placeholder="" value="" required="">'
              +'<div class="invalid-feedback">'
              +'</div>'
            +'</div>'
          +'</div>'
          +'<div class="mb-3">'
            +'<label for="price">가 격 <span class="text-muted">(Optional)</span></label>'
            +'<input type="text" class="form-control" id="pric" placeholder="가 격 (만원단위)">'
            +'<div class="invalid-feedback">'
            +'</div>'
          +'</div>'
          +'<div class="row">'
            +'<div class="col-md-5 mb-3">'
              +'<label for="country">공급업체</label>'
              +'<select class="custom-select d-block w-100" id="country" required="">'
                +'<option value="">업체명</option>'
                +'<option value="samsung">삼 성</option>'
                +'<option value="lge">LG전자</option>'
                +'<option value="apple">애 플</option>'
                +'<option value="xiami">샤오미</option>'
              +'</select>'
            +'</div>'
          +'<hr class="mb-4">'
          +'<div class="invalid-feedback">'
          +'<h4 class="mb-3">사은품을 선택해주세요. (택 2)</h4>'
          +'</div>'
          +'<div class="custom-control custom-checkbox">'
            +'<input type="checkbox" class="custom-control-input" id="same-address">'
            +'<label class="custom-control-label" for="same-address">필 름</label>'
          +'</div>'
          +'<div class="custom-control custom-checkbox">'
	        +'<input type="checkbox" class="custom-control-input" id="same-address">'
	        +'<label class="custom-control-label" for="same-address">보조배터리</label>'
	      +'</div>'
	      +'<div class="custom-control custom-checkbox">'
	        +'<input type="checkbox" class="custom-control-input" id="same-address">'
	        +'<label class="custom-control-label" for="same-address">케이스</label>'
	      +'</div>'
          +'<hr class="mb-4">'
          +'<h4 class="mb-3">색상선택</h4>'
          +'<div class="d-block my-3">'
            +'<div class="custom-control custom-radio">'
              +'<input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'
              +'<label class="custom-control-label" for="credit">화이트</label>'
            +'</div>'
            +'<div class="custom-control custom-radio">'
              +'<input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'
              +'<label class="custom-control-label" for="debit">블랙</label>'
            +'</div>'
            +'<div class="custom-control custom-radio">'
              +'<input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'
              +'<label class="custom-control-label" for="paypal">블루</label>'
            +'</div>'
          +'</div>'
          +'<div class="row">'
            +'<div class="col-md-6 mb-3">'
              +'<label for="cc-name">제품설명</label>'
              +'<input type="textarea" class="form-control" id="cc-name" placeholder="" required="">'
              +'<div class="invalid-feedback">'
              +'</div>'
            +'</div>'
          +'</div>'
          +'<div class="row">'
            +'<div class="col-md-3 mb-3">'
              +'<label for="cc-expiration">이미지 등록(파일업로드)</label>'
              +'<input type="file" class="form-control" id="cc-expiration" placeholder="" required="">'
              +'<div class="invalid-feedback">'
              +'</div>'
            +'</div>'
            +'<div class="col-md-3 mb-3">'
              +'<label for="cc-cvv">이미지 등록(드래그&드랍)</label>'
              +'<input type="file" class="form-control" id="cc-cvv" placeholder="" required="">'
              +'<div class="invalid-feedback">'
              +'</div>'
            +'</div>'
          +'</div>'
          +'<hr class="mb-4">'
          +'<button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>'
        +'</form>'
      +'</div>';
		},
	cust_list : ()=>{
		return '<div class="grid-item" id="content_1">'
        +'<h1><font style="font-size: 30px">사원 리스트</font>'
        +'</h1>'
        +'</div>'
        +'<div class="grid-item" id="content_2">'
	           +'<table id="cust_tab">'
	             +'<tr>'
	               +'<th>NO.</th>'
	               +'<th>아이디</th>'
	               +'<th>이 름</th>'
	               +'<th>생년원일</th>'
	               +'<th>성별</th>'
	               +'<th>전화번호</th>'
	               +'<th>우편번호</th>'
	               +'<th>지번주소</th>'
	               +'<th>상세주소</th>'
	             +'</tr>'
	           +'</table>'
	    +'</div>'
	},
	prod_list: ()=>{
		return '<div class="grid-item" id="content_1">'
        +'<h1><font style="font-size: 30px">스마트폰 리스트</font>'
        +'</h1>'
        +'</div>'
        +'<div class="grid-item" id="content_2">'
	           +'<table id="prod_tab">'
	             +'<tr>'
	               +'<th>PRODUCT_ID</th>'
	               +'<th>상품명</th>'
	               +'<th>공급업체</th>'
	               +'<th>카테고리ID</th>'
	               +'<th>수량</th>'
	               +'<th>가격</th>'
	               +'<th>사진</th>'
	             +'</tr>'
	           +'</table>'
	    +'</div>'
	}
}