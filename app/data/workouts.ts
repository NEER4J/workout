import { Workout } from "../types";

export const workouts: Workout[] = [
  {
    title: "Upper Body",
    dayCode: "mon-thu",
    sections: [
      {
        title: "Warm-up (5–10 mins)",
        exercises: [
          {
            name: "Jumping Jacks",
            instructions: "Stand with feet together and arms at your sides. Jump while spreading your legs and raising your arms overhead, then jump back to the starting position. Continue at a moderate pace for 30-60 seconds.",
            videoUrl: "https://www.youtube.com/watch?v=uLVt6u15L98"
          },
          {
            name: "Arm Circles",
            instructions: "Stand with feet shoulder-width apart. Extend arms outward and make small circles, gradually increasing to larger circles. Perform forward for 30 seconds, then backward for 30 seconds.",
            videoUrl: "https://youtu.be/UVMEnIaY8aU?si=j2N5zhN9zdRBdmhl"
          },
          {
            name: "Arm Swings",
            instructions: "Stand tall with feet shoulder-width apart. Cross arms in front of your chest, then swing them wide open. Continue rhythmically for 30-45 seconds.",
            videoUrl: "https://www.youtube.com/watch?v=z45Bhzinm60"
          },
          {
            name: "Shoulder Rolls",
            instructions: "Stand with feet shoulder-width apart. Roll shoulders forward in large circles for 15 seconds, then backward for 15 seconds. Keep your core engaged and movements smooth.",
            videoUrl: "https://www.youtube.com/watch?v=X7NtgY9kCCM"
          },
          {
            name: "Dynamic Chest Opener",
            instructions: "Stand with feet shoulder-width apart. Open arms wide to the sides, then bring them together in front of your chest. Repeat with fluid movements for 30-45 seconds.",
            videoUrl: "https://www.youtube.com/watch?v=CfLD6ZPx_qg&pp=ygUdRHluYW1pYyBDaGVzdCBPcGVuZXIgdHV0b3JpYWw%3D"
          },
        ],
      },
      {
        title: "Main Routine (3–4 sets)",
        exercises: [
          {
            name: "Standard Push-ups",
            instructions: "Start in a plank position with hands slightly wider than shoulders. Keep your body in a straight line from head to heels. Lower your chest to about 2-3 inches from the floor, keeping elbows at approximately 45° angle to your body. Push back up to the starting position. Keep your core tight throughout the movement.",
            videoUrl: "https://www.youtube.com/watch?v=WDIpL0pjun0&pp=ygUaU3RhbmRhcmQgUHVzaC11cHMgdHV0b3JpYWzSBwkJjQkBhyohjO8%3D"
          },
          {
            name: "Pike Push-ups",
            instructions: "Start in a downward dog position, forming a V-shape with your body. Keep your hips high and hands shoulder-width apart. Bend your elbows to lower your head toward the floor, then push back up. Keep your heels as close to the ground as flexibility allows.",
            videoUrl: "https://www.youtube.com/watch?v=XckEEwa1BPI&pp=ygUWUGlrZSBQdXNoLXVwcyB0dXRvcmlhbA%3D%3D"
          },
          {
            name: "Close-Grip Push-ups (Diamond)",
            instructions: "Start in a plank position but place your hands close together with thumbs and index fingers touching to form a diamond shape. Keep elbows tucked close to your body as you lower your chest toward your hands. Push back up to the starting position.",
            videoUrl: "https://www.youtube.com/watch?v=2cdIRe5tcqI&pp=ygUcQ2xvc2UtR3JpcCBQdXNoLXVwcyB0dXRvcmlhbA%3D%3D"
          },
          {
            name: "Wide Push-ups",
            instructions: "Start in a plank position with hands placed wider than shoulders (about 1.5x shoulder width). Lower your chest toward the floor while keeping your body in a straight line. Push back up to the starting position. Focus on feeling the stretch across your chest.",
            videoUrl: "https://www.youtube.com/watch?v=Z8nUVpSZAhE&pp=ygUWV2lkZSBQdXNoLXVwcyB0dXRvcmlhbNIHCQmNCQGHKiGM7w%3D%3D"
          },
          {
            name: "Chair/Bench Dips",
            instructions: "Sit on the edge of a sturdy chair or bench. Place hands beside your hips, gripping the edge. Slide your butt off the seat with legs extended. Lower your body by bending your elbows until they reach about 90°. Push back up until arms are straight.",
            videoUrl: "https://www.youtube.com/watch?v=5XkOdAtPn2Y&pp=ygUZY2hhaXIvYmVuY2ggZGlwcyB0dXRvcmlhbA%3D%3D"
          },
          {
            name: "Push-up Hold at Bottom",
            instructions: "Get into a push-up position and lower yourself until your chest is 2-3 inches from the floor. Hold this position for 20-30 seconds, keeping your core tight and body in a straight line. Focus on maintaining proper form throughout the hold.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=irJidPcrn1g&pp=ygUWUHVzaC11cCBIb2xkIGF0IEJvdHRvbdIHCQmNCQGHKiGM7w%3D%3D"
          },
          {
            name: "Towel Row",
            instructions: "Sit on the floor with your legs extended straight. Loop a towel around the arches of your feet, holding the ends of the towel with your hands. Keeping your back straight, pull the towel towards your torso by bending your elbows and squeezing your shoulder blades together. Control the movement as you slowly extend your arms back to the starting position.",
            videoUrl: "https://www.youtube.com/watch?v=upS-3_worok&pp=ygUKVG93ZWwgUm93XA%3D%3D"
          },
          {
            name: "Inverted Row (Underhand Grip)",
            instructions: "Position yourself under a sturdy horizontal bar (e.g., a low pull-up bar, sturdy table edge, or suspension trainer). Grab the bar with an underhand grip (palms facing you), slightly wider than shoulder-width. Hang with your body straight, heels on the ground. Pull your chest up towards the bar by bending your elbows and squeezing your back muscles. Lower yourself back down with control. Adjust difficulty by changing your body angle – the closer you are to parallel to the ground, the harder the exercise.",
            videoUrl: "https://www.youtube.com/watch?v=kZEFaAbz93U&pp=ygUdSW52ZXJ0ZWQgUm93IChVbmRlcmhhbmQgR3JpcCk%3D"
          },
          { // Suggested Addition
            name: "Towel Bicep Curls",
            instructions: "Stand on the middle of a towel, holding one end in each hand, palms facing forward. Keeping elbows tucked to your sides, curl your hands up towards your shoulders, creating resistance by pulling the towel taut. Squeeze your biceps at the top. Slowly lower back down. Adjust foot placement on the towel to modify resistance.",
            videoUrl: "https://www.youtube.com/watch?v=crj5Zqwbz1A&pp=ygURVG93ZWwgQmljZXAgQ3VybHM%3D"
          },
          { // Suggested Addition for Rear Delts/Upper Back
            name: "Prone YTWL Raises",
            instructions: "Lie face down with arms extended. For Y: lift arms to a Y shape, thumbs up. For T: lift arms to a T shape, palms down. For W: bend elbows, pull shoulder blades back, forming a W. For L: arms by sides, palms up, lift slightly. Perform 5-10 reps of each letter consecutively per set, focusing on squeezing shoulder blades.",
            videoUrl: "https://www.youtube.com/watch?v=QdGTI4Lshg4&pp=ygURUHJvbmUgWVRXTCBSYWlzZXM%3D"
          }
        ],
      },
      {
        title: "Optional (Advanced)",
        exercises: [
          {
            name: "Pseudo Planche Push-ups",
            instructions: "Start in a push-up position but with hands placed alongside your hips, fingers pointing toward your feet. Lean your body weight forward so your shoulders are in front of your hands. Keeping this forward lean, perform push-ups while maintaining a straight body line.",
            videoUrl: "https://www.youtube.com/watch?v=odcPqBOlJhI&pp=ygUXUHNldWRvIFBsYW5jaGUgUHVzaC11cHM%3D"
          },
          {
            name: "Wall-assisted Handstand Hold",
            instructions: "Face a wall and place your hands about 6-12 inches away from it. Kick your legs up against the wall one at a time until your body is in an inverted position. Keep your core tight and hold the position for 20-60 seconds, focusing on keeping shoulders engaged and breathing normally.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=wiUrxRrJ2uw&pp=ygUcV2FsbC1hc3Npc3RlZCBIYW5kc3RhbmQgSG9sZA%3D%3D"
          },
        ],
      },
      {
        title: "Cool-down",
        exercises: [
          {
            name: "Chest Stretch",
            instructions: "Stand in a doorway with your arms extended to the sides, elbows bent at 90°. Place forearms on the door frame and step forward with one foot, leaning forward until you feel a stretch across your chest and shoulders. Hold for 30 seconds.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=U97ktFbE_ZM&pp=ygUNQ2hlc3QgU3RyZXRjaA%3D%3D"
          },
          {
            name: "Overhead Tricep Stretch",
            instructions: "Raise one arm overhead and bend at the elbow, allowing your hand to drop behind your head. Use your opposite hand to gently press on the elbow to deepen the stretch. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=nbHOmIYMazk&pp=ygUXT3ZlcmhlYWQgVHJpY2VwIFN0cmV0Y2g%3D"
          },
          {
            name: "Shoulder Stretch",
            instructions: "Bring one arm across your chest and use the opposite hand to gently pull the elbow closer to your body. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=XMsBC9-vSDs&pp=ygUQU2hvdWxkZXIgU3RyZXRjaA%3D%3D"
          },
          { // Added Bicep Stretch for completeness
            name: "Bicep Wall Stretch",
            instructions: "Stand facing a wall. Extend one arm straight out to the side at shoulder height, placing your palm and inner arm flat against the wall. Gently turn your body away from the wall until you feel a stretch in your bicep and chest. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=QY4gCIYbGQk&pp=ygUSQmljZXAgV2FsbCBTdHJldGNo"
          }
        ],
      },
    ],
  },
  {
    title: "Core",
    dayCode: "tue-fri",
    sections: [
      {
        title: "Warm-up (5–10 mins)",
        exercises: [
          {
            name: "High Knees",
            instructions: "Stand in place and run, bringing your knees up toward your chest as high as comfortable. Keep your core engaged and maintain a quick pace for 30-60 seconds.",
            videoUrl: "https://www.youtube.com/watch?v=ymdS7tM0zws&pp=ygUKSGlnaCBLbmVlcw%3D%3D"
          },
          {
            name: "Torso Twists",
            instructions: "Stand with feet shoulder-width apart and hands at chest level with elbows out. Rotate your upper body from side to side, keeping your hips facing forward. Continue for 30-45 seconds with controlled movements.",
            videoUrl: "https://www.youtube.com/watch?v=HMKbmG1L7vc&pp=ygUMVG9yc28gVHdpc3Rz"
          },
          {
            name: "Hip Circles",
            instructions: "Stand with feet shoulder-width apart and hands on hips. Make large circular motions with your hips, as if using a hula hoop. Do 10-15 circles clockwise, then 10-15 counterclockwise.",
            videoUrl: "https://www.youtube.com/watch?v=oU_oVMJL3-8&pp=ygULSGlwIENpcmNsZXM%3D"
          },
          {
            name: "Cat-Cow",
            instructions: "Start on hands and knees with a neutral spine. For cat, exhale and round your back toward the ceiling while dropping your head. For cow, inhale and arch your back, lifting your head and tailbone. Flow between these positions for 30-45 seconds.",
            videoUrl: "https://www.youtube.com/watch?v=ESJ6Ghvgr6k&pp=ygUHQ2F0LUNvdw%3D%3D"
          },
        ],
      },
      {
        title: "Main Routine (3–4 rounds)",
        exercises: [
          {
            name: "Plank with Shoulder Taps",
            instructions: "Start in a high plank position with shoulders over wrists. Keeping hips stable (avoid rocking side to side), lift one hand to tap the opposite shoulder, then return it to the floor. Alternate sides. Focus on maintaining a straight line from head to heels.",
            videoUrl: "https://www.youtube.com/watch?v=jgQ49dXfznk&pp=ygUYUGxhbmsgd2l0aCBTaG91bGRlciBUYXBz"
          },
          {
            name: "Side Plank (with Leg Lift)",
            instructions: "Lie on your side with legs straight. Prop yourself up on your elbow with shoulder directly above elbow. Lift hips to create a straight line from head to feet. For added difficulty, raise the top leg. Hold for 30 seconds each side, then switch.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=cngmwRRKKdk&pp=ygUaU2lkZSBQbGFuayAod2l0aCBMZWcgTGlmdCk%3D"
          },
          {
            name: "Reverse Crunches",
            instructions: "Lie on your back with hands at sides or under your lower back for support. Bend knees at 90° with feet off the floor. Use your lower abs to lift your hips off the floor, bringing knees toward your chest. Lower back down with control.",
            videoUrl: "https://www.youtube.com/watch?v=N5CHqtgiylc&pp=ygUQUmV2ZXJzZSBDcnVuY2hlcw%3D%3D"
          },
          {
            name: "Leg Raises",
            instructions: "Lie flat on your back with legs straight and hands under your lower back for support. Keep legs together and lift them straight up until perpendicular to the floor, then lower them slowly without touching the floor. Keep lower back pressed into the ground throughout.",
            videoUrl: "https://www.youtube.com/watch?v=PCDxgsX_LFs&pp=ygUKTGVnIFJhaXNlcw%3D%3D"
          },
          {
            name: "Bicycle Crunches",
            instructions: "Lie on your back with hands behind your head and knees bent. Lift shoulders off the floor and bring one knee toward your chest while rotating to touch it with the opposite elbow. Extend the other leg straight. Alternate sides with a pedaling motion.",
            videoUrl: "https://www.youtube.com/watch?v=cbKIDZ_XyjY&pp=ygUQQmljeWNsZSBDcnVuY2hlcw%3D%3D"
          },
          {
            name: "Superman Hold",
            instructions: "Lie face down with arms extended overhead. Simultaneously lift your arms, chest, and legs off the floor, engaging your lower back and glutes. Hold for 15-30 seconds while breathing normally, then lower back down.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=z6PJMT2y8GQ&pp=ygUNU3VwZXJtYW4gSG9sZA%3D%3D"
          },
          {
            name: "Bird Dog",
            instructions: "Start on hands and knees with a flat back. Simultaneously extend one arm forward and the opposite leg backward until both are parallel to the floor. Hold for 2-3 seconds, then return to starting position and repeat with opposite limbs.",
            videoUrl: "https://www.youtube.com/watch?v=k2azbhhuKuM&pp=ygUIQmlyZCBEb2c%3D"
          },
        ],
      },
      {
        title: "Optional",
        exercises: [
          {
            name: "Hollow Body Hold",
            instructions: "Lie on your back and press your lower back firmly into the floor. Extend arms overhead and legs straight out, lifting shoulders and legs off the floor. Keep your core tight and maintain the position for 20-45 seconds, focusing on keeping your lower back pressed down.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=4xRpGgttca8&pp=ygUQSG9sbG93IEJvZHkgSG9sZA%3D%3D"
          },
          {
            name: "V-Ups",
            instructions: "Lie on your back with arms extended overhead and legs straight. Simultaneously lift your upper body and legs, reaching your hands toward your toes to form a V shape. Lower back down with control and repeat.",
            videoUrl: "https://www.youtube.com/watch?v=BIOM5eSsJ_8&pp=ygUFVi1VcHM%3D"
          },
        ],
      },
      {
        title: "Cool-down",
        exercises: [
          {
            name: "Cobra Pose",
            instructions: "Lie face down with hands under shoulders. Press through hands to lift chest off the floor while keeping hips down. Keep shoulders relaxed away from ears. Hold for 30 seconds while breathing deeply.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=JDcdhTuycOI&pp=ygUKQ29icmEgUG9zZQ%3D%3D"
          },
          {
            name: "Child's Pose",
            instructions: "Kneel on the floor with toes together and knees hip-width apart. Sit back on your heels and extend arms forward as you lower your forehead to the floor. Relax into the stretch for 30-45 seconds, breathing deeply.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=nMp3MlTz9fA&pp=ygUMQ2hpbGQncyBQb3Nl"
          },
          {
            name: "Lying Spinal Twist",
            instructions: "Lie on your back with arms extended to the sides. Bend knees and let them fall to one side while keeping shoulders flat on the floor. Turn head in the opposite direction of knees. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=qEVNj4tcr0Y&pp=ygUSTHlpbmcgU3BpbmFsIFR3aXN0"
          },
        ],
      },
    ],
  },
  {
    title: "Lower Body",
    dayCode: "wed-sat",
    sections: [
      {
        title: "Warm-up (5–10 mins)",
        exercises: [
          {
            name: "Leg Swings",
            instructions: "Stand next to a wall or support for balance. Swing one leg forward and backward in a controlled motion, keeping your upper body straight. Do 15-20 swings per leg, then switch to side-to-side swings.",
            videoUrl: "https://www.youtube.com/watch?v=naW8u72lOzI&pp=ygUKTGVnIFN3aW5ncw%3D%3D"
          },
          {
            name: "Hip Openers",
            instructions: "Stand with feet wider than shoulder-width. Perform small knee circles in both directions. Then, lower into a deep squat position and hold for 5-10 seconds, focusing on opening the hips. Stand and repeat 5-8 times.",
            videoUrl: "https://www.youtube.com/watch?v=nztA0esoOBc&pp=ygULSGlwIE9wZW5lcnM%3D"
          },
          {
            name: "Ankle Mobility",
            instructions: "Get into a lunge position with front foot flat. Keeping heel on the ground, gently rock your knee forward over your toes and back. Perform 10-15 reps, then switch legs.",
            videoUrl: "https://www.youtube.com/watch?v=gNEctw65Bww&pp=ygUOQW5rbGUgTW9iaWxpdHnSBwkJjQkBhyohjO8%3D"
          },
          {
            name: "Bodyweight Squats",
            instructions: "Stand with feet shoulder-width apart. Lower your body by pushing your hips back and bending your knees, as if sitting in a chair. Keep chest up and knees tracking over toes. Descend until thighs are at least parallel to the floor, then push through heels to return to standing.",
            videoUrl: "https://www.youtube.com/watch?v=8uoaYwS6iFM&pp=ygURQm9keXdlaWdodCBTcXVhdHM%3D"
          },
        ],
      },
      {
        title: "Main Routine (3–4 rounds)",
        exercises: [
          {
            name: "Bulgarian Split Squats",
            instructions: "Stand about 2 feet in front of a chair or bench. Place the top of one foot on the bench behind you. Lower your body by bending your front knee until the thigh is parallel to the floor. Keep your front knee aligned with your toes. Push through the front heel to return to the starting position. Perform all reps on one leg before switching.",
            videoUrl: "https://www.youtube.com/watch?v=vgn7bSXkgkA&pp=ygUWQnVsZ2FyaWFuIFNwbGl0IFNxdWF0cw%3D%3D"
          },
          {
            name: "Jump Squats",
            instructions: "Start with feet shoulder-width apart. Lower into a squat position, then explosively jump upward, extending through hips, knees, and ankles. Land softly by bending at the knees, immediately lowering back into the squat position for the next rep.",
            videoUrl: "https://www.youtube.com/watch?v=5xv0DKqe5XQ&pp=ygULSnVtcCBTcXVhdHM%3D"
          },
          {
            name: "Glute Bridges",
            instructions: "Lie on your back with knees bent and feet flat on floor, hip-width apart. Push through your heels to lift your hips toward the ceiling until your body forms a straight line from shoulders to knees. Squeeze glutes at the top, then lower with control.",
            videoUrl: "https://www.youtube.com/watch?v=Xp33YgPZgns&pp=ygUNR2x1dGUgQnJpZGdlcw%3D%3D"
          },
          {
            name: "Single-Leg Glute Bridge",
            instructions: "Start in the glute bridge position. Extend one leg straight out while keeping the other foot on the floor. Push through the heel of your planted foot to lift hips toward the ceiling. Keep hips level throughout the movement. Complete all reps on one side before switching.",
            videoUrl: "https://www.youtube.com/watch?v=AVAXhy6pl7o&pp=ygUXU2luZ2xlLUxlZyBHbHV0ZSBCcmlkZ2U%3D"
          },
          { // Suggested Addition for Hamstrings
            name: "Sliding Leg Curls (Towel Hamstring Curls)",
            instructions: "Lie on your back with knees bent and heels on a slippery surface (use towels on hardwood, or sliders on carpet). Lift your hips into a glute bridge. Slowly extend your legs by sliding your heels away from your body, keeping hips lifted. Once legs are almost straight, pull heels back towards your glutes using your hamstrings. Keep hips high throughout.",
            videoUrl: "https://www.youtube.com/watch?v=UaecXxAgsKA&pp=ygUpU2xpZGluZyBMZWcgQ3VybHMgKFRvd2VsIEhhbXN0cmluZyBDdXJscyk%3D"
          },
          { // Suggested Addition for Adductors/Abductors
            name: "Side Lunges (Lateral Lunges)",
            instructions: "Stand with feet hip-width apart. Step out to one side, keeping the other leg straight. Bend the knee of the stepping leg and sit your hips back, ensuring the knee tracks over the foot. Keep your chest up. Push off the bent leg to return to the starting position. Alternate sides or complete all reps on one side before switching.",
            videoUrl: "https://www.youtube.com/watch?v=1D_tsUSW3ZY&pp=ygUcU2lkZSBMdW5nZXMgKExhdGVyYWwgTHVuZ2VzKQ%3D%3D"
          },
          {
            name: "Step-ups",
            instructions: "Stand in front of a sturdy chair or platform. Step up with one foot, pressing through the heel to bring your body up until standing on the platform. Focus on using the stepping leg rather than pushing off with the back foot. Step back down and repeat, completing all reps on one leg before switching.",
            videoUrl: "https://www.youtube.com/watch?v=9ZknEYboBOQ&pp=ygUIU3RlcC11cHM%3D"
          },
          {
            name: "Wall Sit",
            instructions: "Stand with your back against a wall, feet shoulder-width apart and about 2 feet from the wall. Slide down until your thighs are parallel to the ground, forming a 90-degree angle at the knees. Keep your back flat against the wall. Hold this position for 30-60 seconds.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=cWTZ8Am1Ee0&pp=ygUIV2FsbCBTaXQ%3D"
          },
          {
            name: "Calf Raises",
            instructions: "Stand with feet hip-width apart, optionally holding onto something for balance. Rise up onto the balls of your feet, lifting heels as high as possible. Hold the contracted position for a moment, then lower heels back to the ground with control.",
            videoUrl: "https://www.youtube.com/watch?v=nnPGrBLNlaw&pp=ygULQ2FsZiBSYWlzZXM%3D"
          },
          {
            name: "Donkey Kicks",
            instructions: "Start on all fours with hands under shoulders and knees under hips. Keeping knee bent at 90 degrees, lift one leg up and back until the thigh is parallel to the floor and the sole of the foot faces the ceiling. Squeeze your glute at the top, then lower. Complete all reps on one side before switching.",
            videoUrl: "https://www.youtube.com/watch?v=EtSJ8rwm5M8&pp=ygUMRG9ua2V5IEtpY2tz"
          },
          {
            name: "Reverse Lunges",
            instructions: "Stand with feet hip-width apart. Step one foot backward and lower your body until both knees form 90° angles, with back knee hovering just above the floor. Push through the front heel to return to standing. Complete all reps on one side before switching.",
            videoUrl: "https://www.youtube.com/watch?v=Ry-wqegeKlE&pp=ygUOUmV2ZXJzZSBMdW5nZXM%3D"
          },
        ],
      },
      {
        title: "Optional (Advanced)",
        exercises: [
          {
            name: "Pistol Squats",
            instructions: "Stand on one leg with the other leg extended straight in front of you. Keeping your extended leg off the ground, slowly lower your body by bending the supporting knee. Go as low as possible while keeping balance, then push through the heel to stand back up. Use a support if needed at first.",
            videoUrl: "https://www.youtube.com/watch?v=ZI3gB5irv5g&pp=ygUNUGlzdG9sIFNxdWF0cw%3D%3D"
          },
          {
            name: "Nordic Curl Negatives",
            instructions: "Kneel on a soft surface with feet anchored (under a couch or with a partner holding them). Start upright with hands at your chest. Keeping your body straight from knees to shoulders, slowly lower your torso toward the ground, resisting with your hamstrings as long as possible. Use hands to catch yourself and push back to the starting position.",
            videoUrl: "https://www.youtube.com/watch?v=vBgP7bJlgMs&pp=ygUVTm9yZGljIEN1cmwgTmVnYXRpdmVz0gcJCY0JAYcqIYzv"
          },
        ],
      },
      {
        title: "Cool-down",
        exercises: [
          {
            name: "Quad Stretch",
            instructions: "Stand on one leg or hold onto a support for balance. Bend the other knee and bring your heel toward your buttock, grabbing your ankle with the same-side hand. Keep knees close together and hips square. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=FBO9-8nTbsM&pp=ygUMUXVhZCBTdHJldGNo"
          },
          {
            name: "Hamstring Stretch",
            instructions: "Sit on the edge of a chair with one leg extended, heel on the floor. Keep your back straight and hinge forward at the hips until you feel a stretch in the back of your extended leg. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=wr_8aak4Wbc&pp=ygURSGFtc3RyaW5nIFN0cmV0Y2jSBwkJjQkBhyohjO8%3D"
          },
          {
            name: "Calf Stretch",
            instructions: "Stand facing a wall with one foot forward and one back. Keep the back leg straight with heel on the ground. Lean forward until you feel a stretch in the calf of the back leg. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=2_2GMXTc1BE&pp=ygUMQ2FsZiBTdHJldGNo"
          },
          {
            name: "Glute Stretch",
            instructions: "Sit on the floor with legs straight. Cross one foot over the opposite thigh, placing it just above the knee. Gently pull the uncrossed leg toward your chest until you feel a stretch in the crossed leg's glute. Hold for 30 seconds, then switch sides.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=2zMMjowsfB0&pp=ygUNR2x1dGUgU3RyZXRjaA%3D%3D"
          },
          { // Added Adductor Stretch
            name: "Butterfly Stretch (Adductors)",
            instructions: "Sit on the floor with the soles of your feet together and knees bent out to the sides. Gently press your knees towards the floor using your elbows or hands to feel a stretch in your inner thighs. Keep your back straight. Hold for 30 seconds.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=9T_-syvFIVw&pp=ygUdQnV0dGVyZmx5IFN0cmV0Y2ggKEFkZHVjdG9ycyk%3D"
          }
        ],
      },
    ],
  },
  {
    title: "Active Recovery",
    dayCode: "sun",
    sections: [
      {
        title: "Light Activities",
        exercises: [
          {
            name: "Light 30 min walk",
            instructions: "Take a relaxed 30-minute walk at a comfortable pace. Focus on maintaining good posture, breathing deeply, and enjoying your surroundings. This helps improve circulation without adding stress to your muscles.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=AdSQaIh94ME&pp=ygURTGlnaHQgMzAgbWluIHdhbGs%3D"
          },
          {
            name: "Gentle Yoga",
            instructions: "Perform 15-20 minutes of gentle yoga poses focusing on breathing and stretching. Move through poses like downward dog, cat-cow, child's pose, and gentle twists. Hold each pose for 3-5 deep breaths.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=EvMTrP8eRvM&pp=ygULR2VudGxlIFlvZ2E%3D"
          },
          {
            name: "Deep Stretching",
            instructions: "Spend 15-20 minutes on full-body stretching, holding each stretch for 30-60 seconds. Focus on any areas that feel particularly tight from the week's workouts. Remember to breathe deeply into each stretch.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=yIcjAEs18TQ&pp=ygUPRGVlcCBTdHJldGNoaW5n"
          },
        ],
      },
      {
        title: "Focus",
        exercises: [
          {
            name: "Breathing Practice",
            instructions: "Sit or lie comfortably and practice deep breathing for 5-10 minutes. Inhale slowly through your nose for a count of 4, hold for a count of 2, exhale through your mouth for a count of 6. Focus on filling your lungs fully and emptying them completely.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=OXjlR4mXxSk&pp=ygUSQnJlYXRoaW5nIFByYWN0aWNl"
          },
          {
            name: "Posture Check",
            instructions: "Stand with your back against a wall with heels, buttocks, shoulders, and head touching the wall. Step forward and maintain this alignment as you walk around for 2-3 minutes, being mindful of your posture.",
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=MgT2yuUHCws&pp=ygUNUG9zdHVyZSBDaGVjaw%3D%3D"
          },
        ],
      },
    ],
  },
];