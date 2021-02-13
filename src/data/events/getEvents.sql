SELECT [Id],
        [Password],
        [Email],
        [Name],
        [Department],
        [EnteredOn],
        [LastUpdate],
        [SecurityLevel]
FROM    [dbo].[users]
WHERE   [UserId] = @UserId
ORDER BY
        [EnteredOn]