Today, I'd like to show you how to use Array.reduce in order to deal with data that is maybe not quite as clean as we'd always like it to be. To celebrate the new Star Wars movie, I thought I'd use some Star Wars characters as my sample data here. No spoilers here for anything new.

Here's what we've got. We've got three characters, Luke, Han, and Anakin. We've got their name, we've got whether they're a Jedi, and then we have their parents. All we care about with their parents is whether that parent was a Jedi. For Luke, his father was a Jedi. His mother was not.

For Han, both of his parents, we assume, are not Jedi. But we get to Anakin and we have a problem because Anakin doesn't have a father, if we listen to the original trilogy and we let his mother stick to her story. How do we make an informed decision about this?

If we try to write some pipeline that looks at character.parents.father.Jedi to find out if that parent was a Jedi, we're going to get an undefined exception. Let's write that real quick so you can see what I mean. We can say characters.forEach. Let's just say console.log, character.name, father was a Jedi. Then we can say character.parents.father.Jedi.

Let's run this. We can see that it worked. Luke Skywalker's father was a Jedi, true. Han Solo's father was a Jedi, false. Now, oh no, we've got some kind of a problem here. Why? Because we're trying to read the Jedi property of the father object of the parents object of Anakin.

As you can see, there's no father defined, and so this fails. How many times have you actually seen this? This happens so often when you're programming. You've got to do these null checks if you're trying to read down this path.

Sometimes, that's fine. Sometimes, you don't care. Sometimes, you could have some rule that says, "Look, if father doesn't exist, assume false." That's a perfectly valid way to approach this. We don't want to invalidate our entire strategy just because our data is polluted in this one instance.

But is there some way we can write code that will not crap out while getting us the behavior we care about? It turns out that there is. It turns out that our old friend, Array.reduce is going to help us with this. Here's what this looks like. Let's write a function called father was Jedi, and it takes a character.

The trick here is that we need to come up with the path that we're going to follow down through the character. That's going to be parents...or let's make this is a string, parents.father.Jedi, and we're going to say path.split. We're splitting the path on the period. We're going to return this, path.split.reduce(function(object, field), and the initial value here is the character.

This is a little bit of an unusual formulation. We're not used to seeing things work quite like this. This is not a standard reduction for a lot of us. Let's step through how this is going to work.

We know, or we should know, that when you split a string, you provide the character, and what it's going to do is take this single string and turn it into an array of strings where this character goes away. Every time it sees this, it's going to close that string, open a new string. If I say, "path.split period," it's going to return an array where the first item is parents, the second item is father, and the third item is Jedi.

We're going to do this. We're going to say, "If the accumulator object exists, return object field. Otherwise, just go ahead and return, I don't know, return false." We've got our array of parents, father, and Jedi. We're reducing it, and so what's going to happen? The first time we call this, the object is the character that we've passed in, and the field is going to be parents.

The character does exist, so we're going to return character.parents. That's what this is doing. For each of our three values here, that's going to be just fine. Now, the object, the second time it's called, is the parents object, and the field is going to be father. Now, that's going to return, in this case, it's going to return this object.

In this case, it's going to return this object, and in this case, it's going to return undefined. We don't know. There is no father. The last time this runs with Anakin here, we're going to look at...OBG, object here, is going be undefined, so it's just going to return false. It's not going to try to read undefined.Jedi, but for Luke and Han, it's going to go ahead and read father.Jedi and return that.

Then all we have to do here is instead of doing this hard-coded lookup, we just say, "father was Jedi, character." When we run this, we see that Luke's father was a Jedi, Han Solo's father was not a Jedi, and Anakin Skywalker's father was not a Jedi. I don't always recommend using this all the time. A lot of times, if your data doesn't contain some field, then coercing it to fit this mold by using a reduction like this is actually a band-aid on a larger problem, which is that you are trying to use your data in a way that it was never intended to be used.

If you are going to do this, make sure you understand why your data is malformed. Make sure you understand what exactly is going on there, and that you're not going to be violating some core assumption of your domain by coming up with some default value to escape these undefined checks. But there are definitely those times when this is just a super useful trick to know.