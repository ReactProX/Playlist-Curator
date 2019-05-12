# Simple script for transforming the raw copy pasta from Reddit of all music subs into a proper list of subreddits


with open('all_subs_raw.txt', 'r') as f:
    subs = str([(l.split()[0])[3:] for l in f.readlines() if l[:3]=='/r/'])

with open ('all_subs.txt', 'w') as f:
    f.write(subs)