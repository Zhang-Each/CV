function toggle_vis(id) {
    // var e = document.getElementById(id);
    var e = document.getElementsByClassName(id);
    var showText = document.getElementById("showText");
    for (var i = 0; i < e.length; i++) {
        if (e[i].style.display == "none") {
            e[i].style.display = "inline";
            showText.innerHTML = "[Show less]";
        } else {
            e[i].style.display = "none";
            showText.innerHTML = "[Show more]";
        }
    }
}

function toggle_my_vis(id, showid, t1 = "[hide]", t2 = "[show]") {
    // var e = document.getElementById(id);
    var e = document.getElementsByClassName(id);
    var showText = document.getElementById(showid);
    for (var i = 0; i < e.length; i++) {
        if (e[i].style.display == "none") {
            e[i].style.display = "inline";
            showText.innerHTML = t1;
        } else {
            e[i].style.display = "none";
            showText.innerHTML = t2;
        }
    }
}


function toggle_research_vis(target, tabElement) {
    var is_current_summary = 0;

    var e = document.getElementsByClassName("research_summary");
    for (var i = 0; i < e.length; i++) {
        if (e[i].id == target) {
            if (e[i].style.display == "inline") {
                is_current_summary = 1;
            } else {
                e[i].style.display = "inline";
            }
        } else {
            e[i].style.display = "none";
        }
    }

    var e = document.getElementsByClassName("progress_button");
    for (var i = 0; i < e.length; i++) {
        if (e[i].id == target + "_button") {
            if (is_current_summary == 0) {
                e[i].style.display = "inline";
            }
        } else {
            e[i].style.display = "none";
        }
    }

    var e = document.getElementsByClassName("goal_tabs");
    for (var i = 0; i < e.length; i++) {
        if (e[i].id != target + "_goal_tabs") {
            e[i].style.display = "none";
        }
    }

    var e = document.getElementsByClassName("highlight_research_tab");
    for (var i = 0; i < e.length; i++) {
        e[i].className = "research_tab";
    }
    tabElement.className = "highlight_research_tab"
}

function toggle_goal_vis(id, goal_tabs_id, goal) {
    var e = document.getElementById(id);
    e.style.display = "none";
    var goal_tabs = document.getElementById(goal_tabs_id);
    goal_tabs.style.display = "inline";

    var goal_tab = document.getElementById(goal + "_tab");
    toggle_goal_progress_vis(goal_tab);
    // add_goal_progress_div(goal);
}

function toggle_goal_progress_vis(tabElement) {
    var target = tabElement.id;
    target = target.substring(0, target.length - 4);

    var e = document.getElementsByClassName("goal_progress");
    for (var i = 0; i < e.length; i++) {
        if (e[i].id == target) {
            e[i].style.display = "inline";
        } else {
            e[i].style.display = "none";
        }
    }

    var e = document.getElementsByClassName("highlight_goal_tab");
    for (var i = 0; i < e.length; i++) {
        e[i].className = "goal_tab";
    }
    tabElement.className = "highlight_goal_tab"

    add_goal_progress_div(target);
}

function add_goal_progress_div(goal) {
    var e = document.getElementById(goal);
    if (e && e.children.length == 0) {
        var children = Array.from(document.getElementsByClassName(goal));
        for (var i = 0; i < children.length; i++) {
            var cloned_div = children[i].cloneNode(true);
            cloned_div.className = "publication_container";
            e.appendChild(cloned_div);
        }
    }
}
