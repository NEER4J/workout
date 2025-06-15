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
            name: "Arm Circles (Forward & Backward)",
            instructions: "Extend arms to sides. Make small circles forward, then backward. Gradually increase circle size.",
            targetMuscles: ["Shoulders"],
            videoUrl: "https://youtu.be/UVMEnIaY8aU?si=j2N5zhN9zdRBdmhl"
          },
          {
            name: "Resistance Band Pull-Aparts",
            instructions: "Hold a band with both hands, shoulder-width apart, palms down. Pull hands apart, squeezing your shoulder blades.",
            targetMuscles: ["Rear Delts", "Upper Back"],
            videoUrl: "https://www.youtube.com/watch?v=stwYTTPXubo&pp=ygUbUmVzaXN0YW5jZSBCYW5kIFB1bGwtQXBhcnRz"
          },
          {
            name: "Standard Push-ups",
            instructions: "Perform standard push-ups, focusing on a full range of motion to prime the chest, shoulders, and triceps.",
            targetMuscles: ["Chest", "Shoulders", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=WDIpL0pjun0&pp=ygURU3RhbmRhcmQgUHVzaC11cHM%3D"
          },
          {
            name: "Light Dumbbell Floor Press",
            instructions: "Lie on the floor and press light dumbbells up, mimicking your first main lift to warm up the pattern.",
            targetMuscles: ["Chest", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=lNdi7VEf2Ew&pp=ygUaTGlnaHQgRHVtYmJlbGwgRmxvb3IgUHJlc3M%3D"
          }
        ],
      },
      {
        title: "Main Workout",
        exercises: [
          {
            name: "Barbell Floor Press",
            instructions: "Lie on the floor. Grip the bar slightly wider than your shoulders. Lower it to your chest, letting your triceps rest on the floor, then press up forcefully.",
            targetMuscles: ["Chest", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=6G-fNatzuSk&pp=ygUTQmFyYmVsbCBGbG9vciBQcmVzcw%3D%3D"
          },
          {
            name: "Z-Press (Dumbbell)",
            instructions: "Sit on the floor with legs straight out in front of you. Press dumbbells from shoulder level directly overhead, keeping your core tight and back straight.",
            targetMuscles: ["Shoulders", "Core"],
            videoUrl: "https://www.youtube.com/watch?v=wce-elEhBHw&pp=ygUHWi1QcmVzcw%3D%3D"
          },
          {
            name: "Pike Push-ups",
            instructions: "Get into a downward dog yoga pose. Bend your elbows to lower the top of your head towards the floor, heavily targeting the shoulders.",
            targetMuscles: ["Shoulders", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=XckEEwa1BPI&pp=ygUNUGlrZSBQdXNoLXVwcw%3D%3D"
          },
          {
            name: "Dumbbell Floor Flyes",
            instructions: "Lie on the floor with a dumbbell in each hand. With a slight bend in your elbows, lower the dumbbells out to your sides in an arc, then bring them back to the start.",
            targetMuscles: ["Chest"],
            videoUrl: "https://www.youtube.com/watch?v=JMoQWdn5Efg&pp=ygUURHVtYmJlbGwgRmxvb3IgRmx5ZXM%3D"
          },
          {
            name: "Dumbbell Lateral Raises",
            instructions: "Stand with a slight bend in your elbows. Raise dumbbells out to your sides until they reach shoulder height, controlling the movement.",
            targetMuscles: ["Shoulders"],
            videoUrl: "https://www.youtube.com/watch?v=XPPfnSEATJA&pp=ygUXRHVtYmJlbGwgTGF0ZXJhbCBSYWlzZXM%3D"
          },
          {
            name: "Dumbbell Skull Crushers (Floor)",
            instructions: "Lie on the floor holding dumbbells over your chest. Hinge at the elbows to lower the weights towards the sides of your head, then extend to lift them back up.",
            targetMuscles: ["Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=1BDGIcMTSXc&pp=ygUXRHVtYmJlbGwgU2t1bGwgQ3J1c2hlcnM%3D"
          },
          {
            name: "Diamond Push-ups",
            instructions: "Place your hands close together on the floor, forming a diamond shape with your thumbs and index fingers. Lower your chest to your hands, keeping your elbows tucked in.",
            targetMuscles: ["Triceps", "Chest"],
            videoUrl: "https://www.youtube.com/shorts/9Df9OEdCGmU"
          },
          {
            name: "Standard Push-ups to Failure",
            instructions: "As a finisher, perform as many standard push-ups as you can with good form.",
            targetMuscles: ["Chest", "Shoulders", "Triceps"],
            videoUrl: "https://www.youtube.com/watch?v=WDIpL0pjun0&pp=ygURU3RhbmRhcmQgUHVzaC11cHM%3D"
          }
        ],
      },
      {
        title: "Core Finisher",
        exercises: [
          {
            name: "Plank",
            instructions: "Hold a rigid plank position. For a challenge, have a partner place a weight plate on your back.",
            targetMuscles: ["Core"],
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=6LqqeBtFn9M&pp=ygUFUGxhbms%3D"
          },
          {
            name: "Weighted Russian Twists",
            instructions: "Sit on the floor, lean back, and lift your feet (optional). Twist your torso side to side while holding a weight.",
            targetMuscles: ["Core", "Obliques"],
            videoUrl: "https://www.youtube.com/watch?v=Tau0hsW8iR0&pp=ygUXV2VpZ2h0ZWQgUnVzc2lhbiBUd2lzdHM%3D"
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
            name: "Arm Swings & Band Pull-Aparts",
            instructions: "Perform dynamic arm swings across your body, then do band pull-aparts.",
            targetMuscles: ["Shoulders", "Chest", "Back"],
            videoUrl: "https://www.youtube.com/watch?v=z45Bhzinm60"
          },
          {
            name: "Light Resistance Band Rows",
            instructions: "Anchor a band at a low or mid-point. Perform a rowing motion, squeezing your shoulder blades together.",
            targetMuscles: ["Back", "Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=Hol_uV0D7gQ"
          },
          {
            name: "Light Dumbbell Curls",
            instructions: "Perform bicep curls with a light weight to warm up the elbow joints and biceps.",
            targetMuscles: ["Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=ykJmrZ5vK6U"
          },
          {
            name: "Superman Holds",
            instructions: "Lie on your stomach with arms extended. Lift your arms, chest, and legs off the floor, squeezing your back muscles.",
            targetMuscles: ["Lower Back", "Glutes"],
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=z6PJMT2y8GQ"
          }
        ],
      },
      {
        title: "Main Workout",
        exercises: [
          {
            name: "Bent-over Barbell Row",
            instructions: "Hinge at the hips with a flat back. Pull the bar from below your knees to your lower chest/stomach area.",
            targetMuscles: ["Back", "Lats", "Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=T3N-TO4reLQ"
          },
          {
            name: "Dumbbell Single-Arm Row",
            instructions: "Support one hand on the edge of your bed or other sturdy surface. Row a heavy dumbbell up towards your hip, keeping your back flat.",
            targetMuscles: ["Back", "Lats", "Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=pYcpY20QaE8"
          },
          {
            name: "Dumbbell Pullover (Floor)",
            instructions: "Lie on the floor holding one dumbbell with both hands over your chest. Lower the dumbbell behind your head, feeling a stretch in your lats, then pull it back over your chest.",
            targetMuscles: ["Lats", "Chest"],
            videoUrl: "https://www.youtube.com/watch?v=kpzUf1h3i-I"
          },
          {
            name: "Bodyweight Inverted Row (using a table)",
            instructions: "Lie under a sturdy table. Grab the edge and pull your chest towards it, keeping your body straight. Ensure the table is stable.",
            targetMuscles: ["Back", "Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=OY16n4I5U0w"
          },
          {
            name: "Dumbbell Rear Delt Flyes",
            instructions: "Hinge at the hips with a flat back, holding light dumbbells. Raise your arms out to the side in a wide arc, squeezing your shoulder blades.",
            targetMuscles: ["Rear Delts", "Upper Back"],
            videoUrl: "https://www.youtube.com/watch?v=b_LEXi_a4kc"
          },
          {
            name: "Barbell Bicep Curls",
            instructions: "Stand and curl the bar up towards your shoulders, keeping your elbows relatively stable at your sides. Focus on squeezing the biceps.",
            targetMuscles: ["Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=kwG2ZMO-YQA"
          },
          {
            name: "Dumbbell Concentration Curls",
            instructions: "Sit on the edge of your bed. Brace your elbow against your inner thigh and curl the dumbbell up, focusing on a strong peak contraction.",
            targetMuscles: ["Biceps"],
            videoUrl: "https://www.youtube.com/watch?v=0AUGkch3tzc"
          },
          {
            name: "Barbell Shrugs",
            instructions: "Hold a barbell. Elevate your shoulders straight up towards your ears, pause at the top, then lower them under control.",
            targetMuscles: ["Traps"],
            videoUrl: "https://www.youtube.com/watch?v=g6qbq4lH_vQ"
          }
        ],
      },
      {
        title: "Core Finisher",
        exercises: [
          {
            name: "Resistance Band Pallof Press",
            instructions: "Anchor a band at chest height. Stand sideways to the anchor point, press the band straight out from your chest, and resist the rotational pull.",
            targetMuscles: ["Core", "Obliques"],
            videoUrl: "https://www.youtube.com/watch?v=T043y1kHMA0"
          },
          {
            name: "Lying Leg Raises",
            instructions: "Lie on your back. Keep your legs straight and lift them towards the ceiling, then lower them slowly. Hold a dumbbell between your feet for added weight.",
            targetMuscles: ["Core", "Hip Flexors"],
            videoUrl: "https://www.youtube.com/watch?v=PCDxgsX_LFs"
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
            instructions: "Focus on achieving good depth and maintaining proper form.",
            targetMuscles: ["Quads", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=8uoaYwS6iFM"
          },
          {
            name: "Glute Bridges",
            instructions: "Lie on your back with knees bent. Lift your hips towards the ceiling, squeezing your glutes at the top.",
            targetMuscles: ["Glutes", "Hamstrings"],
            videoUrl: "https://www.youtube.com/watch?v=Xp33YgPZgns"
          },
          {
            name: "Resistance Band Lateral Steps",
            instructions: "Place a band around your ankles or knees. Get into a slight squat and step sideways, maintaining tension on the band.",
            targetMuscles: ["Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=4zB93022w9Y"
          },
          {
            name: "Light Dumbbell Lunges",
            instructions: "Perform lunges with light dumbbells or just your bodyweight to prepare for the main movements.",
            targetMuscles: ["Quads", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=D7KaXqQn0F8"
          }
        ],
      },
      {
        title: "Main Workout",
        exercises: [
          {
            name: "Barbell Back Squats",
            instructions: "Place the barbell on your upper back. Squat down, focusing on depth while keeping your chest up and back straight. Go as low as your mobility allows.",
            targetMuscles: ["Quads", "Glutes", "Hamstrings"],
            videoUrl: "https://www.youtube.com/watch?v=ultWZbUmD4E"
          },
          {
            name: "Barbell Romanian Deadlifts (RDLs)",
            instructions: "Keep a slight bend in your knees. Hinge at your hips, keeping your back flat, and lower the weight along your legs until you feel a deep stretch in your hamstrings.",
            targetMuscles: ["Hamstrings", "Glutes", "Lower Back"],
            videoUrl: "https://www.youtube.com/watch?v=JCXUYuzwNrM"
          },
          {
            name: "Bulgarian Split Squats (use bed)",
            instructions: "Elevate your rear foot on your bed. Lunge down on your front leg, keeping your front knee over your ankle. Hold dumbbells for resistance.",
            targetMuscles: ["Quads", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=2C-uNgKwPLE"
          },
          {
            name: "Barbell Hip Thrusts (use bed)",
            instructions: "Rest your upper back on the edge of your bed. Drive your hips up with the barbell across your lap, squeezing your glutes hard at the top.",
            targetMuscles: ["Glutes", "Hamstrings"],
            videoUrl: "https://www.youtube.com/watch?v=SEdqd1n0cvg"
          },
          {
            name: "Dumbbell Reverse Lunges",
            instructions: "Hold dumbbells at your sides. Step back into a lunge, gently touching your back knee to the floor, then drive back up to the starting position.",
            targetMuscles: ["Quads", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=Ry-wqegeKlE"
          },
          {
            name: "Slider Hamstring Curls (use towel)",
            instructions: "Lie on your back with your heels on a towel on a smooth floor. Lift your hips into a bridge, then slide your heels out until your legs are straight. Pull your heels back in.",
            targetMuscles: ["Hamstrings", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=7_p_32y3aV8"
          },
          {
            name: "Dumbbell Goblet Squats",
            instructions: "Hold one dumbbell vertically against your chest with both hands. Squat down, keeping your back straight and chest up, focusing on depth.",
            targetMuscles: ["Quads", "Glutes"],
            videoUrl: "https://www.youtube.com/watch?v=u-p2Gl-jK_I"
          },
          {
            name: "Dumbbell Calf Raises",
            instructions: "Stand while holding heavy dumbbells. Rise up onto the balls of your feet, squeezing your calves at the top. Elevate your toes on a book for a greater range of motion.",
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
            instructions: "Start on all fours. Extend your opposite arm and leg, keeping your core tight and your back flat. Move slowly and with control.",
            targetMuscles: ["Core", "Glutes", "Lower Back"],
            videoUrl: "https://www.youtube.com/watch?v=k2azbhhuKuM"
          },
          {
            name: "Side Plank",
            instructions: "Support your body on one forearm, keeping your body in a straight line. Hold a weight on your hip for a challenge.",
            targetMuscles: ["Obliques", "Core"],
            isHold: true,
            videoUrl: "https://www.youtube.com/watch?v=cngmwRRKKdk"
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