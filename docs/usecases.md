# Use Cases for CountLog

Listed below are several potential use cases for CountLog. Each one involves
tracking events that may be difficult to monitor in any automated way.

## Low-Frequency Events

### 🐭 Tracking how many mice you have killed in your apartment.

If you have a shady or careless landlord, you might have pest problems in your
apartment. Every time you kill a fly (or a mouse, in may case >.>) you can
increment a counter. You can then analyze the frequency of pests killed in order
to hold it over your landlord or forecast future pest problems.

### 🚂 Tracking how many times the train has broken down.

Some cities have public transportation systems. Some cities have, well, \*cough\*
SEPTA Regional Rail. If your public transit system causes you to be late for work,
you might want to have a personal record of incidents in case you employer starts
asking about your lateness.

## Moderate-Frequency Events

### 🦷 Tracking the frequency of good behaviors, like how often you floss.

Although a habit tracker is nice for tracking how often you clean your teeth,
it does have some limitations. What happens if you want to brush you teeth
twice per day? What happens if you floss more often than you brush your teeth?
With CountLog, you can look at behaviors on a weekly basis and adapt your
behaviors for the better.

### 🍟 Tracking the frequency of bad behaviors, like how many times you eat fast food.

Maybe you've made a New Year's resolution to not eat out as often. If you use a
calorie counting app to track what you eat, that might be a better solution. But if
you are targeting a very specific behavior (eat out less), then you might have an
easier time tracking it with CountLog.

## High-Frequency Events

### 📺 Turning on the TV through a home automation system.

Since CountLog supports sending events to an HTTP backend, you can use CountLog
as a sort of "intelligent remote control" for tracking everyday events. For
example, you can hook up CountLog on your phone to become a remote control for
you TV, which then allows you to track how often you turn on the TV.

### 🚽 Tracking how often you go to the bathroom.

Since you can provide text annotations for each event, you can track things like,
"How often do I poop?" A very good example is given on [Imgur](https://imgur.com/gallery/g2a7h).
You won't be able to export those figures, but for personal use you could get
a lot of similar metrics.
