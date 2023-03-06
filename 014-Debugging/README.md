# Debugging
Debugging is a way to execute code, halt execution at key points, inspect the environment/variables, and perform other delicate procedures that are difficult to do during normal execution.  It comes in especially useful with complex and asynchronous code.  It's easy to make a mistake when your code gets complicated and debugging is often the easiest way to determine where things are going wrong.

In VS Code there is a dedicated panel on the left side.  The icon is a "play" button with a bug overlayed on top of it.

## Starting the Debugger
In VS Code, simply press "F5" or select "Run -> Start Debugging".  If you've not already configured anything for the debugger to do then it will execute normally.

## Breakpoints
Breakpoints are flags that you can set on your code that tell the debugger to halt execution at that point and wait for the user to tell it what to do next.  In VS Code (and most IDEs), these are set by clicking off to the left hand side of the code line numbers.  When enabled, a red circle will appear to indicate that a breakpoint is set on that line.  Additionally, you can see all your currently configured breakpoints in the Debug panel under the "BREAKPOINTS" header.

Two helpful checkboxes at the top of the "BREAKPOINTS" section are "Caught Exceptions" and "Uncaught Exceptions".  These allow you to automatically trigger a breakpoint on caught and/or uncaught (via try/catch) exceptions.  If your program is crashing due to an uncaught exception, this is an easy way to jump directly to it when the exception occurs.

You can temporarily disable a breakpoint by removing the checkmark next to it in the breakpoint panel.  Or, you can remove it permanently two ways :
1. Right click the breakpoint in the breakpoint panel and choose "Remove Breakpoint"
2. Click the red circle next to your code that signifies a breakpoint and it will disappear to indicate that it has been removed.

Right clicking in the breakpoint panel also allows you to disable all breakpoints, enable all breakpoints, and remove all breakpoints.

## Inspecting Variables
Once you've reached a breakpoint, you can inspect the values of all the variables that are accessible.  This is usually located at the top of the debug panel by default with the header "VARIABLES".  The three main scopes that you can inspect are "Local", "Closure", and "Global".

Local scope, is how it sounds - the current scope of your breakpoint.  The Closure scope is the enclosing scope that you currently have access to.  The Global scope is "everything" and usually isn't terribly useful unless you need to inspect your run environment.  It will be cluttered with every loaded module/object/etc.

While inspecting variables you have the option to change them in memory if you need to test a specific scenario.  Right click on the variable you want to alter, click "Set", and enter the new value.

## Watching Variables
When stopped at a breakpoint you can also right click variables and choose "Add to Watch".  This will add the variable to the "WATCH" section and update it as it changes.  This gives you an easy way to focus on only the variables you care about - very helpful when things get complicated.

## Call Stack
The call stack shows you the path execution took through your code.  For example, if function1 called function2, called function3, called function4 - you'll see each on the call stack.

## Continuing On...
While your script is executing and not stopped at a breakpoint you have three debugger options available to you : 
1.  Pause - Pause execution
2.  Restart - Halt execution and restart debugging at the beginning
3.  Stop - Halt execution, exit debugger

Once you hit a breakpoint you have more debugger options :
1.  Continue - Continue executing normally until the next breakpoint is encountered.
2.  Step Over - Execute the code, but don't let the debugger delve into the function call - pick up debugging at the next line.
3.  Step Into - Execute the code, and follow execution into the code with the debugger, one line at time.
4.  Step Out - Execute the rest of the code block normally, then resume debugging when we leave the current scope.

"Stepping" is the process of continuing execution, one step (line) at a time.  If you wanted to stop on every single line you would use "Step Into" repeatedly.  Step Over and Step Out let you skip sections of code you don't want to debug.