$(function() {

  const BASE_URL = 'https://api.github.com/users';
  const USERNAME = 'edwardsrob222';
  const CLIENT_ID = 'e3b9022c3e27ec635014';
  const CLIENT_SECRET = '5dd2b02d1225fc22cd7a2e75443360aaa2b57e36';

  // this gets the user profile data and adds it the DOM
  let getProfileData = $.ajax({
    method: 'GET',
    url: `${BASE_URL}/${USERNAME}`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }
  });

  var createProfileHTML = (res) => {
    var source = $("#aside").text();
    // console.log(source);
    var template = Handlebars.compile(source);
    var context = res.data;
    var html = template(context);
    // console.log(html);
    $('.aside').html(html);

  }

  getProfileData.done(createProfileHTML);

  // this gets the user org data and adds it to the DOM

  let getOrgData = $.ajax({
    method: 'GET',
    url: `${BASE_URL}/${USERNAME}/orgs`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }
  });

  var createOrgHTML = (res) => {
    var source = $("#aside-org").text();
    var template = Handlebars.compile(source);
    var context = res.data;
    var html = template(context);
    $('.aside-org').html(html);
  }

  getOrgData.done(createOrgHTML);






  // this gets the user repo data and adds it to the DOM

  let getRepoData = $.ajax({
    method: 'GET',
    url: `${BASE_URL}/${USERNAME}/repos`,
    dataType: "jsonp",
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }
  });


  let createRepoHTML = (res) => {
    var source = $("#repos").text();
    var template = Handlebars.compile(source);
    var context = {repo:res.data};
    var html = template(context);
    $('.repos').html(html);
  }

  getRepoData.done(createRepoHTML);




});
