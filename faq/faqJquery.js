 
//   our main content question , '+' & '-' icon and theory/answers  are targeted in below lines
        var subTopic1 = $("#plus1")
        var content1 = $("#dropContent1")
        var icon1 = $("#icon1")

        var subTopic2 = $("#plus2")
        var content2 = $("#dropContent2")
        var icon2 = $("#icon2")

        var subTopic3 = $("#plus3")
        var content3 = $("#dropContent3")
        var icon3 = $("#icon3")

        var subTopic4 = $("#plus4")
        var content4 = $("#dropContent4")
        var icon4 = $("#icon4")

        var subTopic5 = $("#plus5")
        var content5 = $("#dropContent5")
        var icon5 = $("#icon5")

        var subTopic6 = $("#plus6")
        var content6 = $("#dropContent6")
        var icon6 = $("#icon6")

        var subTopic7 = $("#plus7")
        var content7 = $("#dropContent7")
        var icon7 = $("#icon7")

        var subTopic8 = $("#plus8")
        var content8 = $("#dropContent8")
        var icon8 = $("#icon8")


    // this function will give access to theory/answer by clicking on '+' icon/question and hide the answer on click of '-',
    // And also +,- will be fluctuated on every click event on icon/question.  
        function plus_minus(a, b) {
            if ($(a).hasClass("fa-plus")) {
                $(a).removeClass("fa-plus")
                $(a).addClass("fa-minus")
                $(b).show(100)
            } else {
                if ($(a).hasClass("fa-minus")) {
                    $(a).addClass("fa-plus")
                    $(a).removeClass("fa-minus")
                    $(b).hide(100)
                } else {
                    $(a).addClass("fa-plus")
                    $(a).removeClass("fa-minus")
                    $(b).hide(100)
                }
            }
        }
// here we are just applying above function to every Question
        $("#plus1").click(function () {
            plus_minus(icon1, content1);
        })
        $("#plus2").click(function () {
            plus_minus(icon2, content2);
        })
        $("#plus3").click(function () {
            plus_minus(icon3, content3);
        })
        $("#plus4").click(function () {
            plus_minus(icon4, content4);
        })
        $("#plus5").click(function () {
            plus_minus(icon5, content5);
        })
        $("#plus6").click(function () {
            plus_minus(icon6, content6);
        })
        $("#plus7").click(function () {
            plus_minus(icon7, content7);
        })
        $("#plus8").click(function () {
            plus_minus(icon8, content8);
        })



        // $(first).click(function () {
        //     if ($(this).hasClass("fa-plus")) {
        //         $(this).removeClass("fa-plus")
        //         $(this).addClass("fa-minus")
        //         $("#content").show(500)
        //     } else {
        //         $(this).addClass("fa-plus")
        //         $(this).removeClass("fa-minus")
        //         $("#content").hide(500)
        //     }
        // })


// here we are targeting some topic ids and some new question have also being created related to the topic
        var hlpOrd_target = $("#helpOrder")
        var hlpOrd_head = $("#helpOrder").html()
        var hlpOrd_que1 = "How I will get my Refund "
        var hlpOrd_que2 = "order cancellation policy"
        var hlpOrd_que3 = "something"
        var hlpOrd_que4 = "something related to Order"





        var hlpIssu_target = $("#helpIssue")
        var hlpIssu_head = $("#helpIssue").html()



// here we are targeting some topic ids and some new question have also being created related to the topic
        var hlpIssu2_target = $("#helpIssue2")
        var helpIssue2_head = $("#helpIssue2").html()
        var hlpIssu2_que1 = "Isuue in Paymnt ?"
        var hlpIssu2_que2 = "order cancellation policy"
        var hlpIssu2_que3 = "this is another help issue question "
        var hlpIssu2_que4 = "something related to Issue"





// this function is doing so many things i.e... changing question on change of topic ,selected topic is bold and colored and different background...
//         and also topic name will be heading of the contnt box

        function topic_change(a, b, c, head, ques1, ques2, ques3, ques4) {

            if ($(c).hasClass("current") || $(b).hasClass("current")) {
                $(a).addClass("current").css("font-weight", "bold")
                $(b).removeClass("current").css("font-weight", "normal")
                $(c).removeClass("current").css("font-weight", "normal")
            } else {

            }
            $("h4").html(head)
            $("#plus1 span").html(ques1)
            $("#plus2 span").html(ques2)
            $("#plus3 span").html(ques3)
            $("#plus4 span").html(ques4)
            $("#plus5 ,#plus6 , #plus7 ,#plus8").hide()

        }

// applying above function to various topic here 
        $("#helpOrder").click(function () {
            topic_change(hlpOrd_target, hlpIssu_target, hlpIssu2_target, hlpOrd_head, hlpOrd_que1,
                hlpOrd_que2, hlpOrd_que3, hlpOrd_que4)
        })
        $("#helpIssue2").click(function () {
            topic_change(hlpIssu2_target, hlpIssu_target, hlpOrd_target, helpIssue2_head, hlpIssu2_que1,
                hlpIssu2_que2, hlpIssu2_que3, hlpIssu2_que4)
        })

// I didn't write jquery for help topic !!!!!
// we can add helpTopic topic same as above function or we can simply add names of topic to the function



        $("#helpIssue").click(function () {

            if ($("#helpOrder").hasClass("current") || $("#helpIssue2").hasClass("current")) {
                $("#helpIssue").addClass("current").css("font-weight", "bold")
                $("#helpIssue2 , #helpOrder").removeClass("current").css("font-weight", "normal")
            }
            $("h4").html(hlpIssu_head)
            $("#plus1 span").html("How do I create my Account")
            $("#plus2 span").html("How do I order")
            $("#plus3 span").html("I have Problem adding items to my shopping cart")
            $("#plus4 span").html("How do I pay for my Order ?")
            $("#plus5 ,#plus6 , #plus7 ,#plus8").show()

        })



    // this function we use for sidebar collapse/toggle on click of button with id #sidebar
        $(document).ready(function () {
            $("#sidebarCollapse").click(function () {
                $("#sidebar").toggle(500)
            })
        })



        window.addEventListener("scroll", function () {
            var scroll = document.querySelector(".scrollTop");
            scroll.classList.toggle("active", window.scrollY > 500)
        })

        // The following functions takes you to top of website 
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }