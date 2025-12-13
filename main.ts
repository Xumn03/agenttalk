/**
 * ©2026 Wave Technologies LTDA. Todos os direitos resevados.
 * 
 * AgentTalk e seus afiliados são propriedade intelectual da Wave Technologies LTDA e da Microsoft Corporation e não podem ser vendidos sem a devida autorização.
 * 
 * Este Add-On está sob desenvolvimento contínuo e não pode ser parado por não-autoridades.
 */
player.onChat("agent defprop PLACE_ON_MOVE true", function () {
    agent.setAssist(PLACE_ON_MOVE, true)
})
player.onChat("chicken", function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(CHICKEN, pos(0, 10, 0))
    }
})
player.onChat("agent get position", function () {
    loops.pause(100)
    player.say(agent.getPosition())
})
events.onEndOfDay(function () {
    agent.teleportToPlayer()
    player.say("Contate \"agent help\" para ver o que você pode fazer para sobreviver")
})
events.onItemUsed(function (item, method) {
	
})
player.onChat("agent follow me", function () {
    loops.pause(100)
    agent.teleportToPlayer()
    agent.move(FORWARD, 5)
})
player.onChat("agent help", function () {
    player.say("Lista de comandos completa:")
    loops.pause(100)
    agent.teleportToPlayer()
    player.say("1: agent")
    player.say("2: agent follow me")
    player.say("3: agent get position")
    player.say("4: agent defprop put-block-in-movement true")
})
// AgentTalk e seus afiliados são propriedade intelectual da Wave Technologies LTDA e da Microsoft Corporation e não podem ser vendidos sem a devida autorização.
player.onChat("agent", function () {
    agent.teleportToPlayer()
    player.say("Digite \"agent help\" para uma lista completa de comandos do AgentTalk")
})
player.say("Digite \"agent help\" para uma lista completa de comandos do AgentTalk")
