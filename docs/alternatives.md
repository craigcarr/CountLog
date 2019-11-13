# Alternatives to CountLog

CountLog fills a hole in the app ecosystem for _manually logged events_ that can be stored, visualized, and analyzed at any future time. Some alternatives to CountLog exist, but they have weaknesses that prevent some use cases from being satisfied.

## Thing Counter

<https://play.google.com/store/apps/details?id=de.sleak.thingcounter&hl=en_US>

Thing Counter allows users to create _counters_ that can be incremented or decremented by the push of a button. This app is helpful for tracking things like `gym visits` or `mice killed`. Counters can then be reset and recorded into time ranges, so `mice killed` could be tracked per month. However, because Thing Counter uses _counters_ as the primary type of data and not _events_, it has several limitations.

- Timestamps are not recorded when a counter is modified, so detailed analysis of events over time is impossible (e.g. estimating the statistical distribution of mice killed over time).
- Metadata about an event cannot be recorded (e.g. "mouse killed by cat and not by sticky trap").
- Counter modifications are not easily integrated into larger data collection systems (e.g. using Grafana to visualize mice killed over time and then showing it to your landlord).

## Tallyphant

<https://f-droid.org/en/packages/com.ciarang.tallyphant/>

Tallyphant works very similarly to Thing Counter, using _counters_ as its primary type of data. One very nifty feature of Tallyphant is that it allows for logging counter updates to a UDP server using its "UDP Update" feature. However, the user interface is janky and the app is not maintained (it's not deployed in the Google Play Store), making it virtually unusable.

## Loop Habit Tracker

<https://play.google.com/store/apps/details?id=org.isoron.uhabits&hl=en_US>

Loop is an open source habit tracker that lets you create _habits_ with their own repetition frequency and reminder schedule. Loop is suitable for ensuring that once-a-day or once-a-week activities are actually performed, such as `sweep the apartment` or `floss your teeth`. While Loop can emulate event counters to some degree, its primary use case is for ensuring that daily or weekly tasks are performed, an therefore doesn't allow habits to be performed multiple times per day.
