import { Workout } from "../types";

export const workouts: Workout[] = [
  {
    title: "PUSH (Chest, Shoulders, Triceps)",
    dayCode: "mon-thu",
    sections: [
      {
        title: "Warm-up (5–8 mins)",
        exercises: [
          {
            name: "Wrist Circles & Stretches",
            instructions: "Perform slow, controlled circles with your wrists in both directions. Then, gently stretch your wrists in flexion and extension. Crucial for handling pressing movements and future calisthenics.",
            targetMuscles: ["Wrists", "Forearms"],
            videoUrl: "https://www.youtube.com/watch?v=wRSk1_C6yOM&pp=ygUZV3Jpc3QgQ2lyY2xlcyAmIFN0cmV0Y2hlcw%3D%3D"
          },
          {
            name: "Arm Circles (Forward & Backward)",
            instructions: "Extend arms to sides. Make small circles forward, then backward. Gradually increase circle size.",
            targetMuscles: ["Shoulders"],
            videoUrl: "https://www.youtube.com/watch?v=UVMEnIaY8aU&pp=ygULQXJtIENpcmNsZXM%3D"
          },
          {
            name: "Wall Slides",
            instructions: "Stand with your back against a wall. Place your forearms on the wall in a 'goalpost' position. Slide your arms up overhead, keeping your elbows and wrists in contact with the wall, then slide back down.",
            targetMuscles: ["Shoulders", "Upper Back"],
            videoUrl: "https://www.youtube.com/shorts/i_0zLUcE-zk"
          },
          {
            name: "Push-ups",
            instructions: "Place your hands on a sturdy elevated surface (like the edge of your bed). Perform push-ups with a full range of motion to prime the chest, especially the lower fibers.",
            targetMuscles: ["Chest", "Shoulders", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=WDIpL0pjun0&pp=ygUIUHVzaC11cHM%3D"
          }
        ],
      },
      {
        title: "Main Workout",
        exercises: [
          {
            name: "Dumbbell Bench Press (Floor)",
            instructions: "Lie on the floor holding dumbbells. Press the weights up until your arms are fully extended, then lower them until your triceps touch the floor. Allows for a more natural hand position than a barbell.",
            targetMuscles: ["Chest", "Shoulders", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=uUGDRwge4F8"
          },
          {
            name: "Standing Dumbbell Overhead Press",
            instructions: "Stand with feet shoulder-width apart, core tight. Press dumbbells from your shoulders directly overhead to full extension. This is a foundational full-body strength builder.",
            targetMuscles: ["Shoulders", "Triceps", "Core"],
            videoUrl: "https://www.youtube.com/watch?v=B-aVuyAUYpY"
          },
          {
            name: "Pike Push-ups (Feet Elevated)",
            instructions: "Get into a downward dog pose with your feet on an elevated surface (like a book or stool). Bend your elbows to lower the top of your head towards the floor. The higher your feet, the harder it is and the more it mimics a handstand push-up.",
            targetMuscles: ["Shoulders", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=0_1N1d_e4aE"
          },
          {
            name: "Dumbbell Floor Flyes",
            instructions: "Lie on the floor with a dumbbell in each hand. With a slight bend in your elbows, lower the dumbbells out to your sides in an arc, then bring them back to the start.",
            targetMuscles: ["Chest"],
            videoUrl: "https://www.youtube.com/watch?v=JMoQWdn5Efg"
          },
          {
            name: "Dumbbell Lateral Raises",
            instructions: "Stand with a slight bend in your elbows. Raise dumbbells out to your sides until they reach shoulder height, controlling the movement. Focus on leading with your elbows.",
            targetMuscles: ["Shoulders"],
            videoUrl: "https://www.youtube.com/watch?v=XPPfnSEATJA"
          },
          {
            name: "Dumbbell Skull Crushers (Floor)",
            instructions: "Lie on the floor holding dumbbells over your chest. Hinge at the elbows to lower the weights towards the sides of your head, then extend to lift them back up.",
            targetMuscles: ["Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=1BDGIcMTSXc"
          },
          {
            name: "Diamond Push-ups",
            instructions: "Place your hands close together on the floor, forming a diamond shape. Lower your chest to your hands, keeping your elbows tucked in. Elevate your feet to increase the difficulty.",
            targetMuscles: ["Triceps", "Chest"],
            videoUrl: "https://www.youtube.com/shorts/9Df9OEdCGmU"
          },
          {
            name: "Dips (using two chairs or bed edge)",
            instructions: "Use two sturdy chairs or the edge of your bed. Lower your body by bending your elbows until you feel a stretch in your chest/shoulders, then press back up. Keep your torso upright to target triceps more.",
            targetMuscles: ["Triceps", "Chest", "Shoulders"],
            videoUrl: "https://www.youtube.com/watch?v=0326dy_-CzM"
          }
        ],
      },
      {
        title: "Core Finisher",
        exercises: [
          {
            name: "Hollow Body Hold",
            instructions: "Lie on your back. Press your lower back into the floor. Lift your head, shoulders, and legs off the ground. Find a position you can hold with perfect form. This is the #1 core exercise for calisthenics.",
            targetMuscles: ["Core", "Abs"],
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=vMhS6M_fcxg"
          },
          {
            name: "Weighted Russian Twists",
            instructions: "Sit on the floor, lean back, and lift your feet (optional). Twist your torso side to side while holding a weight plate.",
            targetMuscles: ["Core", "Obliques"],
            videoUrl: "https://www.youtube.com/watch?v=Tau0hsW8iR0"
          },
          {
            name: "Plank",
            instructions: "Hold a rigid plank position on your forearms. Squeeze your glutes and abs. For a challenge, have a partner place a weight plate on your back.",
            targetMuscles: ["Core"],
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=6LqqeBtFn9M"
          }
        ],
      },
    ],
  },
  {
    title: "PULL (Back, Biceps, Rear Delts)",
    dayCode: "tue-fri",
    sections: [
      {
        title: "Warm-up (5–8 mins)",
        exercises: [
          {
            name: "Cat-Cow Stretch",
            instructions: "Get on all fours and alternate between arching your back (Cat) and rounding your spine (Cow) to warm up your spine.",
            targetMuscles: ["Spine", "Back"],
            videoUrl: "https://www.youtube.com/watch?v=LIVJZZyZ2qM&pp=ygUPQ2F0LUNvdyBTdHJldGNo"
          },
          {
            name: "Dumbbell Curls",
            instructions: "Perform bicep curls with a light weight to warm up the elbow joints and biceps.",
            targetMuscles: ["Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=6DeLZ6cbgWQ&pp=ygUORHVtYmJlbGwgQ3VybHM%3D"
          },
          {
            name: "Superman Holds",
            instructions: "Lie on your stomach with arms extended. Lift your arms, chest, and legs off the floor, squeezing your back muscles.",
            targetMuscles: ["Lower Back", "Glutes"],
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=ZNVWTVdJW5s&pp=ygUOU3VwZXJtYW4gSG9sZHM%3D"
          }
        ],
      },
      {
        title: "Main Workout",
        exercises: [
          {
            name: "Bent-over Barbell Row",
            instructions: "Hinge at the hips with a flat back. Pull the bar from below your knees to your lower chest/stomach area. This is your primary back thickness builder.",
            targetMuscles: ["Back", "Lats", "Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=bm0_q9bR_HA&pp=ygUVQmVudC1vdmVyIEJhcmJlbGwgUm93"
          },
          {
            name: "Dumbbell Single-Arm Row",
            instructions: "Support one hand on a sturdy surface. Row a heavy dumbbell up towards your hip, keeping your back flat. Focus on driving your elbow back.",
            targetMuscles: ["Back", "Lats", "Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=DMo3HJoawrU&pp=ygUXRHVtYmJlbGwgU2luZ2xlLUFybSBSb3c%3D"
          },
          {
            name: "Towel Row",
            instructions: "use the door frame and attache a towel to the door frame and pull the towel towards you.",
            targetMuscles: ["Back", "Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=viwhgVBcilc&pp=ygUJVG93ZWwgUm93"
          },
          {
            name: "Dumbbell Pullover (Floor)",
            instructions: "Lie on the floor holding one dumbbell with both hands over your chest. Lower the dumbbell behind your head, feeling a stretch in your lats, then pull it back over your chest.",
            targetMuscles: ["Lats", "Chest", "Serratus Anterior"],
            videoUrl: "https://www.youtube.com/watch?v=ieFKuQAGYIA&pp=ygURRHVtYmJlbGwgUHVsbG92ZXI%3D"
          },
          {
            name: "Face Pulls (Lying, with Dumbbells)",
            instructions: "Lie on the floor holding light dumbbells. Start with arms extended up. Pull the dumbbells down and apart, bringing your hands towards the floor by your ears, as if doing a face pull. Excellent for rear delts and shoulder health.",
            targetMuscles: ["Rear Delts", "Upper Back"],
            videoUrl: "https://www.youtube.com/watch?v=nzTY7j9ocR8&pp=ygUkICJGYWNlIFB1bGxzIChMeWluZywgd2l0aCBEdW1iYmVsbHMp"
          },
          {
            name: "Barbell Bicep Curls",
            instructions: "Stand and curl the bar up towards your shoulders, keeping your elbows relatively stable at your sides. Focus on squeezing the biceps.",
            targetMuscles: ["Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=QciWGMjD-nM&pp=ygUTQmFyYmVsbCBCaWNlcCBDdXJscw%3D%3D"
          },
          {
            name: "Dumbbell Hammer Curls",
            instructions: "Stand holding dumbbells with a neutral (palms facing in) grip. Curl the weight up, maintaining the neutral grip. This builds the brachialis muscle for thicker-looking arms.",
            targetMuscles: ["Biceps", "Brachialis"],
            videoUrl: "https://www.youtube.com/watch?v=CFBZ4jN1CMI&pp=ygUVRHVtYmJlbGwgSGFtbWVyIEN1cmxz"
          },
          {
            name: "Barbell Shrugs",
            instructions: "Hold a heavy barbell. Elevate your shoulders straight up towards your ears, pause at the top, then lower them under control.",
            targetMuscles: ["Traps"],
            videoUrl: "https://www.youtube.com/watch?v=larn3Asl6oM&pp=ygUOQmFyYmVsbCBTaHJ1Z3M%3D"
          }
        ],
      },
      {
        title: "Core Finisher",
        exercises: [
          {
            name: "Lying Leg Raises",
            instructions: "Lie on your back. Keep your legs straight and lift them towards the ceiling, then lower them slowly. Hold a dumbbell between your feet for added weight.",
            targetMuscles: ["Core", "Hip Flexors"],
            videoUrl: "https://www.youtube.com/watch?v=9qbV7ZQNqqA&pp=ygUQTHlpbmcgTGVnIFJhaXNlcw%3D%3D"
          },
          {
            name: "Side Plank Dips",
            instructions: "Get into a side plank on your forearm. Dip your hip towards the floor and then raise it back up. Complete all reps on one side before switching.",
            targetMuscles: ["Obliques", "Core"],
            videoUrl: "https://www.youtube.com/watch?v=7BaVvUuxj6Q&pp=ygUPU2lkZSBQbGFuayBEaXBz"
          },
          {
            name: "Lying Windshield Wipers",
            instructions: "Lie on your back with your legs straight up in the air. Keeping your shoulders on the floor, slowly lower your legs to one side, then to the other, like windshield wipers. Bend knees to make it easier.",
            targetMuscles: ["Core", "Obliques"],
            videoUrl: "https://www.youtube.com/watch?v=NAA9pT_PplE&pp=ygUXTHlpbmcgV2luZHNoaWVsZCBXaXBlcnM%3D"
          }
        ],
      },
    ],
  },
  {
    title: "LEGS (Quads, Hamstrings, Glutes, Calves)",
    dayCode: "wed-sat",
    sections: [
      {
        title: "Warm-up (6–10 mins)",
        exercises: [
          {
            name: "Bodyweight Squats",
            instructions: "Focus on achieving good depth, pausing at the bottom for 1-2 seconds.",
            targetMuscles: ["Quads", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=8uoaYwS6iFM"
          },
          {
            name: "Glute Bridges",
            instructions: "Lie on your back with knees bent. Lift your hips towards the ceiling, squeezing your glutes hard for 2 seconds at the top.",
            targetMuscles: ["Glutes", "Hamstrings"],
            videoUrl: "https://www.youtube.com/watch?v=Xp33YgPZgns"
          },
          {
            name: "Cossack Squats (Bodyweight)",
            instructions: "Take a wide stance. Shift your weight to one side, squatting down as low as you can while keeping the other leg straight. Great for hip mobility and adductor strength.",
            targetMuscles: ["Glutes", "Adductors", "Quads"],
            videoUrl: "https://www.youtube.com/watch?v=tp-s-wAP_fg"
          },
          {
            name: "Forward Leg Swings",
            instructions: "Hold onto a wall for balance. Swing one leg forward and backward, gradually increasing the range of motion to dynamically stretch the hamstrings and hip flexors.",
            targetMuscles: ["Hamstrings", "Hip Flexors"],
            videoUrl: "https://www.youtube.com/watch?v=TziEa2s-2iI"
          }
        ],
      },
      {
        title: "Main Workout",
        exercises: [
          {
            name: "Barbell Back Squats",
            instructions: "Place the barbell on your upper back. Squat down, focusing on depth while keeping your chest up and back straight. This is your primary strength and mass builder for legs.",
            targetMuscles: ["Quads", "Glutes", "Hamstrings"],
            videoUrl: "https://www.youtube.com/watch?v=ultWZbUmD4E"
          },
          {
            name: "Barbell Romanian Deadlifts (RDLs)",
            instructions: "Keep a slight bend in your knees. Hinge at your hips, keeping your back flat, and lower the weight along your legs until you feel a deep stretch in your hamstrings. The king of hamstring development.",
            targetMuscles: ["Hamstrings", "Glutes", "Lower Back"],
            videoUrl: "https://www.youtube.com/watch?v=JCXUYuzwNrM"
          },
          {
            name: "Bulgarian Split Squats (use bed)",
            instructions: "Elevate your rear foot on your bed. Lunge down on your front leg, keeping your front knee over your ankle. Hold dumbbells for resistance. Brutally effective for unilateral strength.",
            targetMuscles: ["Quads", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=2C-uNgKwPLE"
          },
          {
            name: "Barbell Hip Thrusts (use bed)",
            instructions: "Rest your upper back on the edge of your bed. Drive your hips up with the barbell across your lap, squeezing your glutes hard at the top. Unmatched for glute development.",
            targetMuscles: ["Glutes", "Hamstrings"],
            videoUrl: "https://www.youtube.com/watch?v=SEdqd1n0cvg"
          },
          {
            name: "Dumbbell Front Squats",
            instructions: "Hold two dumbbells up on your shoulders (rack position). Squat down, keeping your torso as upright as possible. This emphasizes the quads and challenges your upper back.",
            targetMuscles: ["Quads", "Glutes", "Upper Back"],
            videoUrl: "https://www.youtube.com/watch?v=MW6s0B4s_4U"
          },
          {
            name: "Slider Hamstring Curls (use towel)",
            instructions: "Lie on your back with heels on a towel on a smooth floor. Lift your hips into a bridge, then slide your heels out. Pull your heels back in using your hamstrings. To make it harder, do one leg at a time.",
            targetMuscles: ["Hamstrings", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=7_p_32y3aV8"
          },
          {
            name: "Pistol Squat Negatives / Box Squats",
            instructions: "Builds single-leg strength for pistol squats. Stand on one leg. Slowly lower yourself down to sit on your bed or a chair with full control. Stand up with two legs and repeat.",
            targetMuscles: ["Quads", "Glutes", "Balance"],
            videoUrl: "https://www.youtube.com/watch?v=KzJ Ngo-c4I"
          },
          {
            name: "Dumbbell Calf Raises",
            instructions: "Stand while holding heavy dumbbells. Elevate your toes on a weight plate or book. Rise up onto the balls of your feet, pause for 2 seconds at the top, and slowly lower for a deep stretch.",
            targetMuscles: ["Calves"],
            videoUrl: "https://www.youtube.com/watch?v=nnPGrBLNlaw"
          },
        ],
      },
      {
        title: "Core Finisher",
        exercises: [
          {
            name: "Bird Dog",
            instructions: "Start on all fours. Extend your opposite arm and leg, keeping your core tight and back flat. Pause at full extension, focusing on stability.",
            targetMuscles: ["Core", "Glutes", "Lower Back"],
            videoUrl: "https://www.youtube.com/watch?v=k2azbhhuKuM"
          },
          {
            name: "Side Plank",
            instructions: "Support your body on one forearm, keeping your body in a straight line. Hold a dumbbell or weight plate on your hip for a challenge.",
            targetMuscles: ["Obliques", "Core"],
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=cngmwRRKKdk"
          },
          {
            name: "Weighted Crunches",
            instructions: "Lie on your back with knees bent. Hold a weight plate on your chest. Curl your upper body off the floor, focusing on contracting your abs. Lower under control.",
            targetMuscles: ["Abs"],
            videoUrl: "https://www.youtube.com/watch?v=h_4324fE99A"
          }
        ],
      },
    ],
  },
  {
    title: "Active Recovery / Rest",
    dayCode: "sun",
    sections: [
      {
        title: "Light Activity (Choose 1-2)",
        exercises: [
          { name: "Light Walk", instructions: "Maintain an easy pace and focus on your breathing.", targetMuscles: ["Full Body"], isHold: true, videoUrl: "https://www.youtube.com/watch?v=AdSQaIh94ME" },
          { name: "Gentle Stretching / Mobility", instructions: "Perform a full-body stretch, focusing on tight areas from your workouts. Hold each stretch.", targetMuscles: ["Full Body"], isHold: true, videoUrl: "https://www.youtube.com/watch?v=yIcjAEs18TQ" },
          { name: "Foam Rolling", instructions: "Target sore muscles like quads, hamstrings, glutes, and back.", targetMuscles: ["Full Body"], isHold: true, videoUrl: "https://www.youtube.com/watch?v=pznJ31_I06g" }
        ]
      }
    ]
  }
];
