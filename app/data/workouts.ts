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
          },
          {
            name: "Arm Circles",
            instructions: "Stand with feet shoulder-width apart. Extend arms outward and make small circles, gradually increasing to larger circles. Perform forward for 30 seconds, then backward for 30 seconds.",
          },
          {
            name: "Arm Swings",
            instructions: "Stand tall with feet shoulder-width apart. Cross arms in front of your chest, then swing them wide open. Continue rhythmically for 30-45 seconds.",
          },
          {
            name: "Shoulder Rolls",
            instructions: "Stand with feet shoulder-width apart. Roll shoulders forward in large circles for 15 seconds, then backward for 15 seconds. Keep your core engaged and movements smooth.",
          },
          {
            name: "Dynamic Chest Opener",
            instructions: "Stand with feet shoulder-width apart. Open arms wide to the sides, then bring them together in front of your chest. Repeat with fluid movements for 30-45 seconds.",
          },
        ],
      },
      {
        title: "Main Routine (3–4 sets)",
        exercises: [
          {
            name: "Standard Push-ups",
            instructions: "Start in a plank position with hands slightly wider than shoulders. Keep your body in a straight line from head to heels. Lower your chest to about 2-3 inches from the floor, keeping elbows at approximately 45° angle to your body. Push back up to the starting position. Keep your core tight throughout the movement.",
          },
          {
            name: "Pike Push-ups",
            instructions: "Start in a downward dog position, forming a V-shape with your body. Keep your hips high and hands shoulder-width apart. Bend your elbows to lower your head toward the floor, then push back up. Keep your heels as close to the ground as flexibility allows.",
          },
          {
            name: "Close-Grip Push-ups (Diamond)",
            instructions: "Start in a plank position but place your hands close together with thumbs and index fingers touching to form a diamond shape. Keep elbows tucked close to your body as you lower your chest toward your hands. Push back up to the starting position.",
          },
          {
            name: "Wide Push-ups",
            instructions: "Start in a plank position with hands placed wider than shoulders (about 1.5x shoulder width). Lower your chest toward the floor while keeping your body in a straight line. Push back up to the starting position. Focus on feeling the stretch across your chest.",
          },
          {
            name: "Chair/Bench Dips",
            instructions: "Sit on the edge of a sturdy chair or bench. Place hands beside your hips, gripping the edge. Slide your butt off the seat with legs extended. Lower your body by bending your elbows until they reach about 90°. Push back up until arms are straight.",
          },
          {
            name: "Push-up Hold at Bottom",
            instructions: "Get into a push-up position and lower yourself until your chest is 2-3 inches from the floor. Hold this position for 20-30 seconds, keeping your core tight and body in a straight line. Focus on maintaining proper form throughout the hold.",
            isHold: true,
          },
        ],
      },
      {
        title: "Optional (Advanced)",
        exercises: [
          {
            name: "Pseudo Planche Push-ups",
            instructions: "Start in a push-up position but with hands placed alongside your hips, fingers pointing toward your feet. Lean your body weight forward so your shoulders are in front of your hands. Keeping this forward lean, perform push-ups while maintaining a straight body line.",
          },
          {
            name: "Wall-assisted Handstand Hold",
            instructions: "Face a wall and place your hands about 6-12 inches away from it. Kick your legs up against the wall one at a time until your body is in an inverted position. Keep your core tight and hold the position for 20-60 seconds, focusing on keeping shoulders engaged and breathing normally.",
            isHold: true,
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
          },
          {
            name: "Overhead Tricep Stretch",
            instructions: "Raise one arm overhead and bend at the elbow, allowing your hand to drop behind your head. Use your opposite hand to gently press on the elbow to deepen the stretch. Hold for 30 seconds, then switch sides.",
            isHold: true,
          },
          {
            name: "Shoulder Stretch",
            instructions: "Bring one arm across your chest and use the opposite hand to gently pull the elbow closer to your body. Hold for 30 seconds, then switch sides.",
            isHold: true,
          },
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
          },
          {
            name: "Torso Twists",
            instructions: "Stand with feet shoulder-width apart and hands at chest level with elbows out. Rotate your upper body from side to side, keeping your hips facing forward. Continue for 30-45 seconds with controlled movements.",
          },
          {
            name: "Hip Circles",
            instructions: "Stand with feet shoulder-width apart and hands on hips. Make large circular motions with your hips, as if using a hula hoop. Do 10-15 circles clockwise, then 10-15 counterclockwise.",
          },
          {
            name: "Cat-Cow",
            instructions: "Start on hands and knees with a neutral spine. For cat, exhale and round your back toward the ceiling while dropping your head. For cow, inhale and arch your back, lifting your head and tailbone. Flow between these positions for 30-45 seconds.",
          },
        ],
      },
      {
        title: "Main Routine (3–4 rounds)",
        exercises: [
          {
            name: "Plank with Shoulder Taps",
            instructions: "Start in a high plank position with shoulders over wrists. Keeping hips stable (avoid rocking side to side), lift one hand to tap the opposite shoulder, then return it to the floor. Alternate sides. Focus on maintaining a straight line from head to heels.",
          },
          {
            name: "Side Plank (with Leg Lift)",
            instructions: "Lie on your side with legs straight. Prop yourself up on your elbow with shoulder directly above elbow. Lift hips to create a straight line from head to feet. For added difficulty, raise the top leg. Hold for 30 seconds each side, then switch.",
            isHold: true,
          },
          {
            name: "Reverse Crunches",
            instructions: "Lie on your back with hands at sides or under your lower back for support. Bend knees at 90° with feet off the floor. Use your lower abs to lift your hips off the floor, bringing knees toward your chest. Lower back down with control.",
          },
          {
            name: "Leg Raises",
            instructions: "Lie flat on your back with legs straight and hands under your lower back for support. Keep legs together and lift them straight up until perpendicular to the floor, then lower them slowly without touching the floor. Keep lower back pressed into the ground throughout.",
          },
          {
            name: "Bicycle Crunches",
            instructions: "Lie on your back with hands behind your head and knees bent. Lift shoulders off the floor and bring one knee toward your chest while rotating to touch it with the opposite elbow. Extend the other leg straight. Alternate sides with a pedaling motion.",
          },
          {
            name: "Superman Hold",
            instructions: "Lie face down with arms extended overhead. Simultaneously lift your arms, chest, and legs off the floor, engaging your lower back and glutes. Hold for 15-30 seconds while breathing normally, then lower back down.",
            isHold: true,
          },
          {
            name: "Bird Dog",
            instructions: "Start on hands and knees with a flat back. Simultaneously extend one arm forward and the opposite leg backward until both are parallel to the floor. Hold for 2-3 seconds, then return to starting position and repeat with opposite limbs.",
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
          },
          {
            name: "V-Ups",
            instructions: "Lie on your back with arms extended overhead and legs straight. Simultaneously lift your upper body and legs, reaching your hands toward your toes to form a V shape. Lower back down with control and repeat.",
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
          },
          {
            name: "Child's Pose",
            instructions: "Kneel on the floor with toes together and knees hip-width apart. Sit back on your heels and extend arms forward as you lower your forehead to the floor. Relax into the stretch for 30-45 seconds, breathing deeply.",
            isHold: true,
          },
          {
            name: "Lying Spinal Twist",
            instructions: "Lie on your back with arms extended to the sides. Bend knees and let them fall to one side while keeping shoulders flat on the floor. Turn head in the opposite direction of knees. Hold for 30 seconds, then switch sides.",
            isHold: true,
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
            instructions: "Stand next to a wall or support for balance. Swing one leg forward and backward with controlled momentum, keeping your upper body still. Do 10-15 swings, then switch to side-to-side swings. Repeat with the other leg.",
          },
          {
            name: "Hip Openers",
            instructions: "Stand with feet wider than shoulder-width. Perform small knee circles in both directions. Then, lower into a deep squat position and hold for 5-10 seconds, focusing on opening the hips. Stand and repeat 5-8 times.",
          },
          {
            name: "Ankle Mobility",
            instructions: "Get into a lunge position with front foot flat. Keeping heel on the ground, gently rock your knee forward over your toes and back. Perform 10-15 reps, then switch legs.",
          },
          {
            name: "Bodyweight Squats",
            instructions: "Stand with feet shoulder-width apart. Bend knees and push hips back as if sitting in a chair. Lower until thighs are parallel to the floor (or as low as comfortable). Push through heels to return to standing. Perform 10-15 slow, controlled repetitions.",
          },
        ],
      },
      {
        title: "Main Routine (3–4 rounds)",
        exercises: [
          {
            name: "Bulgarian Split Squats",
            instructions: "Stand about 2 feet in front of a chair or bench. Place the top of one foot on the bench behind you. Lower your body by bending your front knee until the thigh is parallel to the floor. Keep your front knee aligned with your toes. Push through the front heel to return to the starting position. Perform all reps on one leg before switching.",
          },
          {
            name: "Jump Squats",
            instructions: "Start with feet shoulder-width apart. Lower into a squat position, then explosively jump upward, extending through hips, knees, and ankles. Land softly by bending at the knees, immediately lowering back into the squat position for the next rep.",
          },
          {
            name: "Glute Bridges",
            instructions: "Lie on your back with knees bent and feet flat on floor, hip-width apart. Push through your heels to lift your hips toward the ceiling until your body forms a straight line from shoulders to knees. Squeeze glutes at the top, then lower with control.",
          },
          {
            name: "Single-Leg Glute Bridge",
            instructions: "Start in the glute bridge position. Extend one leg straight out while keeping the other foot on the floor. Push through the heel of your planted foot to lift hips toward the ceiling. Keep hips level throughout the movement. Complete all reps on one side before switching.",
          },
          {
            name: "Step-ups",
            instructions: "Stand in front of a sturdy chair or platform. Step up with one foot, pressing through the heel to bring your body up until standing on the platform. Focus on using the stepping leg rather than pushing off with the back foot. Step back down and repeat, completing all reps on one leg before switching.",
          },
          {
            name: "Wall Sit",
            instructions: "Stand with your back against a wall, feet shoulder-width apart and about 2 feet from the wall. Slide down until your thighs are parallel to the ground, forming a 90-degree angle at the knees. Keep your back flat against the wall. Hold this position for 30-60 seconds.",
            isHold: true,
          },
          {
            name: "Calf Raises",
            instructions: "Stand with feet hip-width apart, optionally holding onto something for balance. Rise up onto the balls of your feet, lifting heels as high as possible. Hold the contracted position for a moment, then lower heels back to the ground with control.",
          },
          {
            name: "Donkey Kicks",
            instructions: "Start on all fours with hands under shoulders and knees under hips. Keeping knee bent at 90 degrees, lift one leg up and back until the thigh is parallel to the floor and the sole of the foot faces the ceiling. Squeeze your glute at the top, then lower. Complete all reps on one side before switching.",
          },
        ],
      },
      {
        title: "Optional (Advanced)",
        exercises: [
          {
            name: "Pistol Squats",
            instructions: "Stand on one leg with the other leg extended straight in front of you. Keeping your extended leg off the ground, slowly lower your body by bending the supporting knee. Go as low as possible while keeping balance, then push through the heel to stand back up. Use a support if needed at first.",
          },
          {
            name: "Nordic Curl Negatives",
            instructions: "Kneel on a soft surface with feet anchored (under a couch or with a partner holding them). Start upright with hands at your chest. Keeping your body straight from knees to shoulders, slowly lower your torso toward the ground, resisting with your hamstrings as long as possible. Use hands to catch yourself and push back to the starting position.",
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
          },
          {
            name: "Hamstring Stretch",
            instructions: "Sit on the edge of a chair with one leg extended, heel on the floor. Keep your back straight and hinge forward at the hips until you feel a stretch in the back of your extended leg. Hold for 30 seconds, then switch sides.",
            isHold: true,
          },
          {
            name: "Calf Stretch",
            instructions: "Stand facing a wall with one foot forward and one back. Keep the back leg straight with heel on the ground. Lean forward until you feel a stretch in the calf of the back leg. Hold for 30 seconds, then switch sides.",
            isHold: true,
          },
          {
            name: "Glute Stretch",
            instructions: "Sit on the floor with legs straight. Cross one foot over the opposite thigh, placing it just above the knee. Gently pull the uncrossed leg toward your chest until you feel a stretch in the crossed leg's glute. Hold for 30 seconds, then switch sides.",
            isHold: true,
          },
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
          },
          {
            name: "Gentle Yoga",
            instructions: "Perform 15-20 minutes of gentle yoga poses focusing on breathing and stretching. Move through poses like downward dog, cat-cow, child's pose, and gentle twists. Hold each pose for 3-5 deep breaths.",
            isHold: true,
          },
          {
            name: "Deep Stretching",
            instructions: "Spend 15-20 minutes on full-body stretching, holding each stretch for 30-60 seconds. Focus on any areas that feel particularly tight from the week's workouts. Remember to breathe deeply into each stretch.",
            isHold: true,
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
          },
          {
            name: "Posture Check",
            instructions: "Stand with your back against a wall with heels, buttocks, shoulders, and head touching the wall. Step forward and maintain this alignment as you walk around for 2-3 minutes, being mindful of your posture.",
            isHold: true,
          },
        ],
      },
    ],
  },
]; 