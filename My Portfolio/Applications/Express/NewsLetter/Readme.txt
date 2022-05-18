This application uses mailchimp to build an audience/follower email list.
 - Once a client subscribes, the mailchimp website can be used to send newsletters, updates, etc.
 - Users can subscribe and unsubsribe 

This applications requires:
1: A Mailchimp API key
    -Just sign up, no need for the market or transactional account
    -Generate an API key below:
        -https://us1.admin.mailchimp.com/account/api/

2: Your server prefix:
    -The prefix is at the end of the api key you've created
    -i.e., API Key: abcdefghijklmnopqrstuvwxyz123456-us1
    -Your server prefix is "us1"

3: Audience ID
    -This location may change...
        -One way to find it:
            -Look for a reference to audience id here:
                https://us1.admin.mailchimp.com/audience/

        -Another way to find it:
            -click the down array on the list you want and select settings
            -The ID can be found at the very bottom on the settings page
                https://us1.admin.mailchimp.com/audience/