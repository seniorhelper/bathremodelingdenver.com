/* Small in-page helpers for the guide pages. Runs locally; nothing is sent anywhere. */
(function () {
  "use strict";
  var yb = document.getElementById("yb"), yo = document.getElementById("yb-out");
  if (yb && yo) {
    var yrun = function () {
      var y = parseInt(yb.value, 10);
      if (!y || y < 1800 || y > 2026) { yo.textContent = "Enter a year to see which checks apply. Nothing is sent anywhere."; return; }
      var t = [];
      if (y < 1951) t.push("Built before 1951: Denver Water says a lead service line is more likely. Search your address on its lead map and ask for the free test.");
      if (y < 1978) t.push("Built before 1978: paid work that disturbs paint falls under the EPA lead-safe (RRP) rule. Hire a certified firm.");
      if (y < 1986) t.push("Built before 1986: the EPA says lead pipes, brass fixtures and lead solder are more likely. Replace old faucets and valves with lead-free parts.");
      t.push(t.length ? "Also ask the plumber to identify any galvanized or other original supply pipe while the walls are open." : "None of the three date flags apply. Still have the plumber confirm the pipe material while the walls are open.");
      yo.textContent = t.join(" ");
    };
    yb.addEventListener("input", yrun);
  }
  var dc = document.getElementById("draincheck"), dco = document.getElementById("dc-out");
  if (dc && dco) {
    var pick = function (n) { var e = dc.querySelector('input[name="' + n + '"]:checked'); return e ? e.value : ""; };
    var drun = function () {
      var x = pick("dc-exit"), r = pick("dc-rough"), m;
      if (!x) { dco.textContent = "Pick an answer above. Nothing is sent anywhere."; return; }
      if (x === "floor") m = "A gravity drain is often possible when the sewer leaves below the slab. A plumber confirms the depth and slope.";
      else if (x === "wall") m = "Fixtures will likely sit below the sewer line, so plan on a sewage ejector basin or an up-flush system.";
      else m = "Look near the front of the basement for the large pipe heading outside, or ask a plumber to locate the main line and cleanout.";
      if (r === "yes") m += " An existing rough-in is a good sign the builder planned a drain here; have it camera-checked before you rely on it.";
      dco.textContent = m;
    };
    dc.addEventListener("change", drun);
  }
})();
